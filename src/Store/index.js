import { combineReducers, configureStore } from "@reduxjs/toolkit";

import DoctorSlice from "./Doctor-Slice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./Auth-Slice";

// persist config storage
const persistConfig = {
  key: "root",
  version: "1",
  storage,
};

// put all slice inside rootReducer 
// Property key write as like below
const rootReducer = combineReducers({
  Auth: authSlice,
  Doctor: DoctorSlice,
});


// persisted all reducers inside persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store configure
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
