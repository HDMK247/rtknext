import { configureStore } from '@reduxjs/toolkit';
import authReducer from './freatures/authSlice';
import firestoreReducer from './freatures/firestoreSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    firestore: firestoreReducer, // firestore
  },
});

export default store;
