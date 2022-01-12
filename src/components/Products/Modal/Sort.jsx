import './Sort.scss';
import React from "react";
import { connect, useSelector } from 'react-redux';

import { onSortingChange, enterKeyword } from "../../../actions/all-sort.actions";
//import { sortType } from '../../../store/sort.reducer'

const Sort = (props) => {

    const submitActions = () => {
        props.setActive(false)
    }
    const submitProductsFind = () => {
        props.setActive(false)
    }

    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
            <div className={props.active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <div className='buttons'>


                    <button onClick={() => props.onSortingChange('A to Z')}>aToZ</button>
                    <button onClick={() => props.onSortingChange('Z to A')}>zToA</button>
                    <button onClick={() => props.onSortingChange('LESS-TO-MORE')}>Less to more</button>
                    <button onClick={() => props.onSortingChange('MORE-TO-LESS')}>More to less</button>



                    {/*<select>
                        <option onClick={() => props.onSortingChange(sortType.aToZ)}
                                value = {props.aToZSorting}>From a to Z</option>
                        <option onClick={() => props.onSortingChange(sortType.zToA)}
                                value={props.zToASorting}>From z to a</option>
                        <option onClick={() => props.onSortingChange(sortType.lessToMore)}
                                value = {props.priceLessToMoreSorting}>Less to more</option>
                        <option onClick={() => props.onSortingChange(sortType.moreToLess)}
                                value = {props.priceMoreToLessSorting}>More to less</option>
                    </select> */}
                    <input  
                           placeholder='Enter product name' 
                           onChange={(event) => props.enterKeyword(event.currentTarget.value)}
                           value ={props.filterKeyword} />
                    <button className='button' onClick={() => submitProductsFind()}>Find</button>



                    

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    aToZSorting: state.aToZ,
    zToASorting: state.zToA,
    priceLessToMoreSorting: state.priceLessToMore,
    priceMoreToLessSorting: state.priceMoreToLess,
    filterKeyword: state.filterKeyword

});


const mapDispatchToProps = {
    onSortingChange: onSortingChange,
    enterKeyword: enterKeyword

};


export default connect(mapStateToProps, mapDispatchToProps)(Sort);



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
