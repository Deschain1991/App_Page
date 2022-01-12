import {
    INCREMENT,
    NAME,
    DESCRIPTION,
    COLOR,
    WEIGHT,
    LENGTH,
    HEIGHT,
    WIDTH,
    COUNT,
    ADD_PRODUCT,
    PHOTO,
    DEL_PRODUCT,
} from './action-types'

export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const addSomethingAsync = () => {
    return (dispatch, getState) => {

        setTimeout(() => {
            dispatch(increment())
        }, 3000)

    }
}
export const addProductAction = () => ({ type: ADD_PRODUCT });
export const delProductAction = (id) => ({ type: DEL_PRODUCT, payload: id });
export const updateName = (text) => ({ type: NAME, payload: text });
export const updateDescription = (text) => ({ type: DESCRIPTION, payload: text });
export const updateColor = (text) => ({ type: COLOR, payload: text });
export const updateWeight = (text) => ({ type: WEIGHT, payload: text });
export const updateLength = (text) => ({ type: LENGTH, payload: text });
export const updateHeight = (text) => ({ type: HEIGHT, payload: text });
export const updateWidth = (text) => ({ type: WIDTH, payload: text });
export const updateCount = (text) => ({ type: COUNT, payload: text });
export const updatePhoto = (text) => ({ type: PHOTO, payload: text });
