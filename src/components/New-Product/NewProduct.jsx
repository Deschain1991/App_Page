import React from "react";
import { useParams } from 'react-router-dom'
import "./NewProduct.scss";
import { connect } from "react-redux";


const NewProduct = (props) => {

    const router = useParams()

    return (

        <div className='new-product'>
            <div className='new-product__back'>
                <button className="button" onClick={() => props.history.goBack()} >BACK</button>
            </div>
            <div className='new-product__view'>
                <div className="new-product__name"> {props.productsData.name}</div>
                <img className="new-product__image" src={props.productsData.photo} alt="New product" />
            </div>
            <div className='new-product__description'>

                <div className="new-product__description_item">
                    <div>{props.productsData.description}</div>
                </div>
                <div className="new-product__description_item">
                    <div>COLOR: {props.productsData.color}</div>
                    <div>WEIGHT: {props.productsData.weight} kilo</div>
                    <div>LENGTH: {props.productsData.length} cm</div>
                    <div>HEIGHT: {props.productsData.height} cm</div>
                    <div>WIDTH: {props.productsData.width} cm</div>
                    <div>COUNT: {props.productsData.count} in stock</div>
                </div>
            </div>

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
    const data = (allProducts.find(item => item.id === uidOfPraduct) || {})
    return {
        productsData: data
    }
}

export default connect(mapStateToProps, null)(NewProduct);