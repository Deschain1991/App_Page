import React from "react";
import './one_product.scss';
import { NavLink } from "react-router-dom";



const OneProduct = (props) => {


    return (
        <div className='OneProduct__wrapper'>
            <NavLink to = "/NewProduct">
                <div className='OneProduct__image'>
                    <img src={props.img} alt="Тут буде картинка" />
                </div>
            </NavLink>
            <div className='OneProduct__info' >
                <div>
                    <div>{props.name}</div>
                    <div>{props.description}</div>
                </div>
                <div className='OneProduct__CountDel'>
                    <div>{props.count}</div>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}


export default OneProduct;