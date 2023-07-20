import { createAsyncThunk } from "@reduxjs/toolkit"
import { User } from "app/types/userType"
import Cookies from "js-cookie"
import axios from "axios"
import { TypeDispatch } from "store"
import { user } from "store/Reducers/userSlice"
import { useNavigate } from "react-router-dom"

export const AuthUser = (User : User) => {
    return async (dispatch : TypeDispatch) => {
        try {
            dispatch(user.actions.pendUser());
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login/`,User)
            Cookies.set('access_token', response.data.token)
            dispatch(user.actions.AuthUser(response.data))
            return true
        } catch (error) {
            dispatch(user.actions.UnAuthUser())
            alert("Zadali jste pole špatně!")
            return false
        }
    }
}
export const reAuthUser = () => {
    return async (dispatch : TypeDispatch)=> {
        try {
            dispatch(user.actions.reAuth())
        } catch (error) {
            
        }
      
    }
 }