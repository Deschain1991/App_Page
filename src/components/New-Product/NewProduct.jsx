import React from "react";
import { useParams } from 'react-router-dom'
//import "./NewProduct.scss";
import "./train.scss"
import { connect } from "react-redux";
import { addCommentAction } from "../../actions/all-products.actions";
import { useState } from "react";
import { useSelector } from "react-redux";


const NewProduct = (props) => {

    const initialComment = useSelector(state => state.products.items.newComment)
    const [text, setText] = useState(initialComment);//for comments add(local state)




    return (
        <body>
            <div className="wrapper">
                <button className="back-button" onClick={() => props.history.goBack()} >BACK</button>
                <header className="header _container">
                    header
                </header>
                <div className="content _container">
                    <div className="content-name">name</div>
                    <img className="new-product__image" src={props.productsData.photo} alt="Picture" />
                    <div>content</div>
                </div>
                <footer className="footer _container">footer</footer>
            </div>
        </body>





        //
        //        <div className='new-product'>
        //            <div className='new-product__back'>
        //                <button className="button" onClick={() => props.history.goBack()} >BACK</button>
        //            </div>
        //            <div className='new-product__view'>
        //                <div className="new-product__name"> {props.productsData.name}</div>
        //                <img className="new-product__image" src={props.productsData.photo} alt="Picture" />
        //            </div>
        //            <div className='new-product__description'>
        //
        //                <div className="new-product__description_item">
        //                    <div>{props.productsData.description}</div>
        //                </div>
        //                <div className="new-product__description_item">
        //                    <div>COLOR: {props.productsData.color}</div>
        //                    <div>WEIGHT: {props.productsData.weight} kilo</div>
        //                    <div>LENGTH: {props.productsData.length} cm</div>
        //                    <div>HEIGHT: {props.productsData.height} cm</div>
        //                    <div>WIDTH: {props.productsData.width} cm</div>
        //                    <div>COUNT: {props.productsData.count} in stock</div>
        //                </div>
        //            </div>
        //
        //            <div className='new-product__comments'>
        //                <div>Comments to :'{props.productsData.name}'
        //                    <div>{props.newComment}</div>
        //                </div>
        //                <div>Write your comment:</div>
        //
        //                <div>{/*for comments add */}
        //                    <input
        //                        value={text}
        //                        onChange={(event) => {
        //                            setText(event.currentTarget.value)
        //                        }}
        //                    >
        //                    </input>
        //                    <button onClick={() => props.addCommentAction(text)}> Add New Comment </button>
        //                </div>
        //
        //
        //                <div className='comments-list'></div>
        //            </div>
        //        </div>
        //
        //    )
    )
}




const mapStateToProps = (state, ownProps) => {
    const newComment = state.products.newComment
    const uidOfProduct = ownProps.match.params.id
    const allProducts = state.products.items
    const data = (allProducts.find(item => item.id === uidOfProduct) || {})
    return {
        productsData: data,
        newComment: newComment
    }
}

const mapDispatchToProps = {
    addCommentAction: addCommentAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);