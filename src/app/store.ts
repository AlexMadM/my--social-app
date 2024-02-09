import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { usersSlice } from './slice_users'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { authReducer } from "../common/auth/auth.reducer";
import { data } from "./slice_data";


export const store = configureStore({
  reducer: {
    usersPage: usersSlice,
    auth: authReducer,
    data:data
  },
});
export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;