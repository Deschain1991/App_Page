import {
    KEYWORD,
    SET_SORTING_CHANGE
} from './action-types'

console.log('frvfgvgv')
export const onSortingChange = (value) => ({ type: SET_SORTING_CHANGE, payload: value })
export const enterKeyword =(text) => ({type: KEYWORD, payload: text})  