import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducers from '../features/Auth/authSlice';

const rootReducer = combineReducers({
   auth: authReducers,
});

const store = configureStore({
   reducer: rootReducer,
});

export default store;
