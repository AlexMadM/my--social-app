import { AppDispatch, AppRootStateType } from './store'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootStateType;
  dispatch: AppDispatch;
  rejectValue: null | BaseResponseType;
}>();
type FieldErrorType = {
  error: string;
  field: string;
};

export type BaseResponseType<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
  fieldsErrors: FieldErrorType[];
};
