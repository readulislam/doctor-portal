import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { DoctorAppointments, GetDoctorById } from "../APi/api";

const initialState = {
  doctorId: null,
  doctorInfo: null,
  status: "idle",
  error: "",
  appointments: [],
  appointmentCount:''
};

export const getDoctor = createAsyncThunk("get/doctor", async (phone) => {
  const response = await GetDoctorById(phone);

  return response;
});
export const getAllAppointment = createAsyncThunk("get/allAppointment", async (info) => {
  const response = await DoctorAppointments(info);

  return response;
});

const DoctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    // ==> normal reducer functions go here
  },
  extraReducers(builder) {
    builder
      .addCase(getDoctor.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getDoctor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.doctorId = action.payload.id;
        state.doctorInfo = action.payload;
        state.error = ""
      })
      .addCase(getDoctor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getAllAppointment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllAppointment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.appointments = action.payload.rows;
        state.appointmentCount = action.payload.count
        state.error = ""
      })
      .addCase(getAllAppointment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      
  },
});

export default DoctorSlice.reducer;
