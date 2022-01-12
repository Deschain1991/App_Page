import React from "react";
import { useParams } from 'react-router-dom'
import "./NewProduct.scss";
import { connect } from "react-redux";


const NewProduct = (props) => {

    const router = useParams()

    return (

        <div className='new-product'>
            <div className='new-product__back'>
                <button>Back</button>
            </div>
            <div className='new-product__image'>
                <img src={props.productsData.photo} alt="New product" />
            </div>
            <div className='new-product__description'></div>
            <div className='new-product__comments'>
                <div>Comments to product {props.productsData.name}</div>
                <div>Write your comment:</div>
                <div>
                    <textarea placeholder='Your comment'></textarea>
                </div>
                <button>Send</button>
                <div className='comments-list'></div>
            </div>
        </div>

    )
}


const mapStateToProps = (state, ownProps) => {
    const uidOfPraduct = ownProps.match.params.id
    const allProducts = state.products.items
    const data = (allProducts.find(item => item.id === uidOfPraduct) || {} )
    return {
        productsData: data
    }
}

export default connect(mapStateToProps, null)(NewProduct);