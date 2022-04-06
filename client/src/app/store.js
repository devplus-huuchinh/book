import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/Home/homeSlice';

const rootReducer = {
   home: homeReducer,
};

const store = configureStore({
   reducer: rootReducer,
});

export default store;
