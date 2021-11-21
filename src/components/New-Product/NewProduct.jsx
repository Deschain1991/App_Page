import React from "react";
import { useParams } from 'react-router-dom'
import "./NewProduct.scss";


const NewProduct = (props) => {

    const router = useParams()

    console.log(router)

    return (

        <div className='new-product'>
            <div className='new-product__back'>
                <button>Back</button>
            </div>
            <div className='new-product__image'>
                <img src="#" alt="New product image" />
            </div>
            <div className='new-product__description'></div>
            <div className='new-product__comments'>
                <div>Comments to product</div>
                <div>Write your comment:</div>
                <div>
                    <textarea placeholder='Your comment'></textarea>
                </div>
                <button>Send</button>
                <div className = 'comments-list'></div>
            </div>
        </div>

    )
}

export default NewProduct;