
import React from "react";
import { connect } from "react-redux";
import { delProductAction } from "../../../actions/all-products.actions";
import './DeleteModal.scss';
import { useHistory } from "react-router-dom";



const DeleteModal = (props) => {
    const history = useHistory()
    const submitActions = () => {
        props.setActive(false)
    }
    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
            <div className={props.active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>

                <div>
                    <div>
                        <h1>
                            Confirm Delete
                        </h1>
                    </div>
                    <div>
                        <h2>
                            Are you  sure you want to delete this
                        </h2>
                    </div>
                    <div>
                        <button onClick={e => {
                            props.deleteProduct(props.id)}}>Yes</button>
                    </div>
                    <div>
                        <button onClick={() => submitActions()}>Close</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


const mapDispatchToProps = {
    deleteProduct:delProductAction
}

export default connect(null, mapDispatchToProps)(DeleteModal);