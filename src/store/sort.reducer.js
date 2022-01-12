import { KEYWORD, SET_SORTING_CHANGE } from "../actions/action-types"

//export const sortType = {
//    aToZ: 'aToZ',
//    zToA: 'zToA',
//    lessToMore: 'lessToMore',
//    moreToLess: 'moreToLess'
//}

const initialState = {
    filterKeyword: '',
    sortType: 'A to Z', 

}

const sortReducer = (state = initialState ,action) => {
    switch (action.type){
        case SET_SORTING_CHANGE : {
            return{
                ...state,
                sortType: action.payload
            }
        }
        case KEYWORD : {
            return{
                ...state,
                filterKeyword: action.payload
            }
        }
        default:
            return state;
    }

}


export default sortReducer;