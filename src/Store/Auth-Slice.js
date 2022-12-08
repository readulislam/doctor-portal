import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    userId:null,
    doctorId:null,
    userInfo:null,
    doctorInfo:null,
    isRegister:false,
    isLoggedIn:false,
}

const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        userRegister(state,action){
            state.isRegister=true;
            state.doctorId = null;
            state.doctorInfo = null;
            state.userId = action.payload.userId;
            state.userInfo = action.payload.userInfo;
        },
        userLogin(state,action){
            state.isLoggedIn=true;
            state.doctorId = null;
            state.doctorInfo = null;
            state.userId = action.payload.userId;
            state.userInfo = action.payload.userInfo;
           
        },
        doctorLogin(state,action){
            state.isLoggedIn=true;
            state.doctorId = action.payload.doctorId
            state.doctorInfo = action.payload.doctorInfo
            state.doctorInfo = 
            state.userId = null
            state.userInfo=null
        },
        
    }
});

export const authActions=authSlice.actions;
export default authSlice;