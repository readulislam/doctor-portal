import { createSlice } from '@reduxjs/toolkit';

// const authSlice=createSlice({
//     name:'auth',
//     initialState:{isLoggedIn:false,isRegister:false, userId:''},
//     reducers:{
//         login(state){
//             state.isLoggedIn=true;
//         },
//         logout(state){
//             state.isLoggedIn=false;
//             state.isRegister=false;
//         },
//         registering(state){
//             state.isRegister=false;
//         },
//         registered(state,action){
//             state.isRegister=true;
//             state.userId = action.payload
//         },
//     }
// });

// export const authActions=authSlice.actions;
// export default authSlice;