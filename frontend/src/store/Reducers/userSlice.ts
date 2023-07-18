import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "app/types/userType"
interface initialState {
    token : string,
    isLogin : boolean,
    isLoading : boolean
}

const initialState : initialState = {
   isLogin : false,
   token: "",
   isLoading : false
}

 export const user =  createSlice({
    name : "user",
    initialState,
    reducers : {
        reAuth(state, action: PayloadAction<initialState>) {
          state.isLogin = true;
        },

        pendUser(state){
            state.isLoading = true
        },

        AuthUser(state , action : PayloadAction<initialState>){
          state.isLogin = true;
          state.token = action.payload.token;
          state.isLoading = false;
        },

        UnAuthUser(state){
            state.isLoading = false;
        
        }
    },
 
    
})

export const reducer = user.reducer

