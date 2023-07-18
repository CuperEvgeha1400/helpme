import { combineReducers, } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from "./Reducers/userSlice";
const reducers = combineReducers({
     user : reducer
})


export const setUpStore = () => {
    return configureStore( {
        reducer : reducers
    })
}

export type StoreType = ReturnType<typeof setUpStore>

export type SelectorType = ReturnType<typeof reducers>
export type TypeDispatch = StoreType['dispatch']