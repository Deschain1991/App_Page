import React, { useCallback, useState } from "react";
import './Products.scss';
import OneProduct from './add_product/one_product';
import { useDispatch } from 'react-redux'
import { increment, addSomethingAsync } from '../../actions/all-products.actions'
import Modal from './Modal/Modal';
import { useSelector } from "react-redux";
import Sort from "./Modal/Sort";
//import { sortType } from "../../store/sort.reducer";



const Products = (props) => {

    const dispatch = useDispatch()

    const [modalActive, setModalActive] = useState(false)
    const [modalSortActive, setModalSortActive] = useState(false)

    const products = useSelector(state => state.products.items)
    const count = useSelector(state => state.products.count)
    const filterKeyword = useSelector(state => state.sort.filterKeyword)
    const sortType = useSelector(state => state.sort.sortType)


    const sortedProducts = products.filter((item) => {
        if (!filterKeyword) {
            return true
        } else {
            return item.name.toLowerCase().includes(filterKeyword.toLowerCase())
        }
    }).sort((a, b) => {
        if (sortType === 'Z to A') {
            return a.name < b.name ? 1 : a.name > b.name ? -1 : 0
        } else if (sortType === 'A to Z') {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        } else if (sortType === 'MORE-TO-LESS') {
            return a.count < b.count ? 1 : a.count > b.count ? -1 : 0
        } else if (sortType === 'LESS-TO-MORE') {
            return a.count < b.count ? -1 : a.count > b.count ? 1 : 0
        } 
    })

//console.log('>>>>>>>>>',filterKeyword)

    return (
        <div className='ProductsWrapper'>
            <header>
                <button className='open-btn' onClick={() => setModalActive(true)}>New product</button>
                {/*<button className='open-btn' onClick={() => dispatch(increment())} >Add</button>
                <div>Count: {count}</div>
                <button className='open-btn' onClick={() => dispatch(addSomethingAsync())} >Add Async</button>*/}
                <button className='open-btn' onClick={() => setModalSortActive(true)} >Sort</button>
            </header>
            <div className='products__container'>
                {sortedProducts.map(p => (
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
            <Sort active={modalSortActive} setActive={setModalSortActive}>
            </Sort>


        </div>
    )
}

export default Products;