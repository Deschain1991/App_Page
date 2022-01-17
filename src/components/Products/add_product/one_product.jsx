import React, { useState } from "react";
import './one_product.scss';
import { NavLink, useHistory } from "react-router-dom";
import { delProductAction } from "../../../actions/all-products.actions";
import { connect } from "react-redux";
import DeleteModal from "../Modal/DeleteModal";




const OneProduct = (props) => {
    const history = useHistory()
    const [modalDeleteActive, setModalDeleteActive] = useState(false)


    return (
        <div onClick={() => history.push(`/details/${props.id}`)} className='OneProduct__wrapper'>
            <div className='OneProduct__image'>
                <img src={props.img} alt="Product" />
            </div>
            <div className='OneProduct__info' >
                <div>
                    <div>{props.name}</div>
                    <div>{props.description}</div>
                </div>
                <div className='OneProduct__CountDel'>
                    <div>{props.count}</div>
                    <button onClick={e => {
                        e.stopPropagation()
                        //props.deleteProduct(props.id)
                        setModalDeleteActive(true)
                    }}>Delete</button>

                    <div onClick={e => { e.stopPropagation() }}>
                        <button onClick={() => setModalDeleteActive(true)}>open modal</button>
                    </div>

                </div>
            </div>
            <DeleteModal
                id={props.id}
                active={modalDeleteActive} setActive={setModalDeleteActive}>
            </DeleteModal>
        </div>
    )
}

const mapDispatchToProps = {
    deleteProduct: delProductAction

}

export default connect(null, mapDispatchToProps)(OneProduct);

