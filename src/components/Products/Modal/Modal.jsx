import React from "react";
import { connect } from "react-redux";
import { addProductAction, updateColor, updateCount, updateDescription, updateHeight,
         updateLength, updateName, updatePhoto, updateWeight, updateWidth } from "../../../actions/all-products.actions";
import './Modal.scss';





const Modal = (props) => {
    const submitAction = ()=>{
        props.addNewProduct()
        props.setActive(false)
    }

    return (
      <div className = {props.active ? 'modal active' : 'modal'} onClick = {() => props.setActive(false)}>
          <div className = {props.active ? 'modal__content active' : 'modal__content'} onClick ={e => e.stopPropagation()}>
          <div className='modal-style'>
                    <div> Add new product</div>
                    
                    <div>
                        <div>Name</div>
                        <input  onChange = {(event) => props.enterName(event.currentTarget.value)}
                        value ={props.newName} />
                    </div>
                    <div>
                        <div>Description</div>
                        <input  onChange   = {(event) => props.enterDescription(event.currentTarget.value)}
                        value = {props.newDescription}/>
                    </div>
                    <div>
                        <div>Color</div>
                        <input onChange = {(event) =>props.enterColor(event.currentTarget.value)}
                        value = {props.newColor}/>
                    </div>
                    <div>
                        <div>Weight</div>
                        <input onChange ={(event) => props.enterWeight(event.currentTarget.value)}
                        value = {props.newWeight}/>
                    </div>
                    <div>
                        <div>Length</div>
                        <input onChange ={(event) => props.enterLength(event.currentTarget.value)}
                        value = {props.newLength}/>
                    </div>
                    <div>
                        <div>Height</div>
                        <input onChange ={(event) => props.enterHeight(event.currentTarget.value)} 
                        value = {props.newHeight}/>
                    </div>
                    <div>
                        <div>Width</div>
                        <input onChange ={(event) => props.enterWidth(event.currentTarget.value)}
                        value ={props.newWidth}/>
                    </div>
                    <div>
                        <div>Count</div>
                        <input onChange ={(event) => props.enterCount(event.currentTarget.value)}
                        value = {props.newCount}/>
                    </div>
                    <div>
                        <div>Photo</div>
                        <input onChange ={(event) =>props.enterPhoto(event.currentTarget.value)}
                        value ={props.newPhoto}/>
                    </div>
                    <button>Cancel</button>
                    <button onClick = {()=> submitAction()}>Add product</button>
                </div>
          </div>
      </div>
    )
}

const mapStateToProps = (state) => ({
    newName: state.products.newName,
    newDescription: state.products.newDescription,
    newColor: state.products.newColor,
    newWeight: state.products.newWeight,
    newLength: state.products.newLength,
    newHeight: state.products.newHeight,
    newWidth: state.products.newWidth,
    newCount: state.products.newCount,
    newPhoto: state.products.newPhoto
});

const mapDispatchToProps = {
    enterName: updateName,
    enterDescription: updateDescription,
    enterColor: updateColor,
    enterWeight: updateWeight,
    enterLength: updateLength,
    enterHeight: updateHeight,
    enterWidth: updateWidth,
    enterCount: updateCount,
    enterPhoto: updatePhoto,
    addNewProduct: addProductAction
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);