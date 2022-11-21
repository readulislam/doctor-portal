import {  createSlice } from'@reduxjs/toolkit'

const authSlice=createSlice({
    name:'auth',
    initialState:{isLoggedIn:true,isRegister:false},
    reducers:{
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
        },
        registering(state){
            state.isRegister=true;
        },
        registered(state){
            state.isRegister=false;
        },
    }
});

export const authActions=authSlice.actions;
export default authSlice;