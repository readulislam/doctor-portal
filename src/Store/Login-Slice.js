import {  createSlice } from'@reduxjs/toolkit'

const loginSlice=createSlice({
    name:'login',
    initialState:{isLogged:false},
    reducers:{
        doctorLogin(state){
            state.isLogged=true;
        },
        patientLogin(state){
            state.isLogged=false;
        },
    }
});

export const loginActions=loginSlice.actions;
export default loginSlice;