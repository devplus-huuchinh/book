import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';

export const userProfile = createAsyncThunk('auth/useProfile', async (id) => {
   const response = await authApi.useProfile();
   console.log('🚀 ~ response', response);
   return response;
});

const initialState = {
   loading: false,
   data: {},
   isError: false,
};

const authSlice = createSlice({
   name: 'auth',
   initialState: initialState,
   reducers: {
      userData: (state, action) => {},
   },
   extraReducers: {
      [userProfile.pending]: (state, action) => {
         state.loading = true;
         state.isError = false;
      },
      [userProfile.fulfilled]: (state, action) => {
         const { id, name, email, isBlocked, photoURL, role } = action.payload;
         state.loading = false;
         state.isError = false;
         Object.assign(state.data, {
            id,
            name,
            email,
            isBlocked,
            photoURL,
            role,
         });
      },
      [userProfile.rejected]: (state, action) => {
         state.loading = false;
         state.isError = true;
      },
   },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const authData = (state) => state.auth.data;
export const authLoadingStatus = (state) => state.auth.loading;

// Reducers
const authReducers = authSlice.reducer;
export default authReducers;
