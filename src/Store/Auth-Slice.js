import {  createSlice } from'@reduxjs/toolkit'

const authSlice=createSlice({
    name:'auth',
    initialState:{isLoggedIn:false,isRegister:false},
    reducers:{
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
            state.isRegister=false;
        },
        registering(state){
            state.isRegister=false;
        },
        registered(state){
            state.isRegister=true;
        },
    }
});

export const authActions=authSlice.actions;
export default authSlice;