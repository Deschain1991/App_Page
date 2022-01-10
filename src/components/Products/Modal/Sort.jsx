import './Sort.scss';
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Sort = (props) => {

//console.log('>>>>>' ,props)


    const dispatch = useDispatch()
    const filterProducts = useSelector(state => state.products)

    const sortMethod = {
         aToZ: false,
         zToA: false,
         priceLessToMore: false,
         priceMoreToLess: false
        }
    const sortedProducts = filterProducts.items.filter((item) => {
        if (!filterProducts) {
            return true
        } else{
            return item.name.contains(filterProducts)
        }
    })    
    //console.log('>>>>>>>>', filterProducts)
    const submitActions = () => {
        props.setActive(false)
    }
    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
            <div className={props.active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <div className='buttons'>
                    <button className='button' onClick={() => submitActions()}>From a to Z</button>
                    <br />
                    <button className='button' onClick={() => submitActions()}>From z to a</button>
                    <br />
                    <button className='button' onClick={() => submitActions()}>Big first</button>
                    <br />
                    <button className='button' onClick={() => submitActions()}>Small first</button>
                </div>
            </div>
        </div>
    )
}



export default Sort;




  // const filterKeyword = useSelector((state) => state.products.modal)
 // const sortMethod = {
   // aToZ: false,
   // zToA: false,
   // priceLessToMore: false,
   // priceMoreToLess: false
//}

//const sortedProducts = products.sort((a, b) => {
   // if (sortMethod.aToZ) {
   //     return a.name < b.name ? 1 : a.name > b.name ? -1 : 0
   // } else if (sortMethod.zToA) {
   //     return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
   // } else if (sortMethod.priceLessToMore) {
   //     return a.price < b.price ? 1 : a.price > b.price ? -1 : 0
   // } else if (sortMethod.priceMoreToLess) {
   //     return a.price < b.price ? -1 : a.price > b.price ? 1 : 0
   // }
//}).filter((item) => {
   // if (!filterKeyword) {
   //     return true
   // } else {
     //   return item.name.contains(filterKeyword)
   // }
//})
