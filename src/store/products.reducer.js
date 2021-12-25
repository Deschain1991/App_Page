import { COLOR, COUNT,ADD_PRODUCT, DESCRIPTION, HEIGHT, INCREMENT, LENGTH, NAME, PHOTO, WEIGHT, WIDTH, DEL_PRODUCT,  } from '../actions/action-types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    items: [
        // {
        //     id: 1, name: 'крякозябра', count: 1, description: 'шотатамб якетотам',
        //     img: "https://i.ytimg.com/vi/R1u-zlXo37w/maxresdefault.jpg"
        // },
        // {
        //     id: 2, name: 'крамбамбуля', count: 3, description: 'хто його зна шо воно таке',
        //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78xMpCQGa2JeoxGK5udGqcPSkqWo908KGYrxxE_T1kR1k1vmVTIbtoU7mUlkCtxCeF9Y&usqp=CAU'
        // },
    ],
    //count: 0,

    newName: '',
    newDescription: '',
    newColor: '',
    newWeight: '',
    newLength: '',
    newHeight:'',
    newWidth: '',
    newCount: '',
    newPhoto: '',

}



// export default function productsReducer(state = initialState, action) {
//     switch (action.type) {
//         case INCREMENT: {
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_PRODUCT:{
            let newProduct ={
                id: uuidv4(),
                name: state.newName,
                description: state.newDescription,
                color: state.newColor,
                weight: state.newWeight,
                length: state.newLength,
                height: state.newHeight,
                width: state.newWidth,
                count: state.newCount,
                photo: state.newPhoto,

            }            
            return {
                newName: '',
                newDescription: '',
                newColor: '',
                newWeight: '',
                newLength: '',
                newHeight:'',
                newWidth: '',
                newCount: '',
                newPhoto: '',
                items: [
                    ...state.items, newProduct
                ]
            }
        }
        case DEL_PRODUCT: {
            return {
                ...state,
                items : [
                    ...state.items.filter(item => item.id !== action.payload)
                ]
            }
            
        }
         
        case NAME: {
            return {
                ...state,
                newName: action.payload
            }
        }
        case DESCRIPTION: {
            return {
                ...state,
                newDescription: action.payload
            }
        }
        case COLOR: {
            return {
                ...state,
                newColor: action.payload
            }
        }
        case WEIGHT: {
            return {
                ...state,
                newWeight: action.payload
            }
        }
        case LENGTH: {
            return {
                ...state,
                newLength: action.payload
            }
        }
        case HEIGHT: {
            return {
                ...state,
                newHeight: action.payload
            }
        }
        case WIDTH: {
            return {
                ...state,
                newWidth: action.payload
            }
        }
        case COUNT: {
            return {
                ...state,
                newCount: action.payload
            }
        }
        case PHOTO: {
            return {
                ...state,
                newPhoto: action.payload
            }
        }
     
        default:
           return state;
    }
}

export default productReducer;