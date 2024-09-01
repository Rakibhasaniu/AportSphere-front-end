/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type Tuser = {
    SELLER: any;
    MANAGER: any;
    ADMIN: any;
    role:string
    email:string
    iat:number
    exp:number
}

type TAuthState = {
    user:null | Tuser;
    token: null | string;
    role:null  | string;

}


const initialState:TAuthState = {
    user:null,
    token:null,
    role:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setUser:(state,action) => {
            const {user,token} = action.payload;
            state.user=user;
            state.token=token;

        },
        logout:(state) => {
            state.token=null;
            state.user=null;
        }
    }
})

export const  {setUser,logout} = authSlice.actions;

export default authSlice.reducer

export const currentToken = (state:RootState) => state.auth.token
export const currentUser = (state:RootState) => state.auth.user