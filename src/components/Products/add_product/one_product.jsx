import React from "react";
import './one_product.scss';
import { NavLink, useHistory } from "react-router-dom";




const OneProduct = (props) => {
    const history = useHistory()

    return (
        <div  onClick={() => history.push(`/details/${props.id}`)} className='OneProduct__wrapper'>
                <div className='OneProduct__image'>
                    <img src={props.img} alt="Тут буде картинка" />
                </div>
            <div className='OneProduct__info' >
                <div>
                    <div>{props.name}</div>
                    <div>{props.description}</div>
                </div>
                <div className='OneProduct__CountDel'>
                    <div>{props.count}</div>
                    <button onClick ={e => e.stopPropagation()}>Delete</button>
                </div>
            </div>
        </div>
    )
}


export default OneProduct;