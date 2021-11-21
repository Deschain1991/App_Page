import React, { useState } from "react";
import './Products.scss';
import OneProduct from './add_product/one_product';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { increment, addSomethingAsync } from '../../actions/all-products.actions'
import Modal from './Modal/Modal';
import { useSelector } from "react-redux";



const Products = (props) => {

    const dispatch = useDispatch()

    const [modalActive, setModalActive] = useState(false)

    const products = useSelector(state => state.products.items)
    const count = useSelector(state => state.products.count)

    return (
        <div className='ProductsWrapper'>
            <header>
                <button className='open-btn' onClick={() => setModalActive(true)}>New product</button>
                <div>Count: {count}</div>
                <button className='open-btn' onClick={() => dispatch(increment())} >Add</button>
                <button className='open-btn' onClick={() => dispatch(addSomethingAsync())} >Add Async</button>
                <div>Sort</div>
            </header>
            <div className='products__container'>
                {products.map(p => (
                    <OneProduct
                        description={p.description}
                        count={p.count}
                        id={p.id}
                        img={p.photo}
                        name={p.name}
                        key={p.id}
                    />
                ))}
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
            </Modal>

        </div>
    )
}

export default Products;