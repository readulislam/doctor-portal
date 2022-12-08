import { configureStore} from'@reduxjs/toolkit'
// import authSlice from './Auth-Slice'
// import loginSlice from './Login-Slice';

const store=configureStore({
    reducer:{
        // auth:authSlice.reducer,
        // login:loginSlice.reducer
    }
});
export default store