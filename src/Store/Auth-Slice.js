import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginPatient } from "../APi/api";
const initialState = {
  userId: null,
  userInfo: null,
  isRegister: false,
  isLoggedIn: false,
  error: "",
  status: "idle",
};
export const patientLoginByPhone = createAsyncThunk(
  "patient/login",
  async (phone) => {
    const response = await LoginPatient(phone);
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    userRegister(state, action) {
      state.isRegister = true;
      state.isLoggedIn = true;
      
      state.userId = action.payload.userId;
      state.userInfo = action.payload.userInfo;
    },
    userLogin(state, action) {
      state.isLoggedIn = true;

      state.userId = action.payload.userId;
      state.userInfo = action.payload.userInfo;
    },
    logout(state,action){
      state.userId= null;
      state.userInfo= null;
      state.isRegister= false;
      state.isLoggedIn= false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(patientLoginByPhone.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(patientLoginByPhone.fulfilled, (state, action) => {
        if (!action.payload.massage) {
          state.status = "succeeded";
          state.userId = action.payload.id;
          state.userInfo = action.payload;
          state.error = "";
          state.isRegister = true;
          state.isLoggedIn = true;
        }
      })
      .addCase(patientLoginByPhone.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
