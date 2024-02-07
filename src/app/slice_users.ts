import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetUsersResponse, usersAPI, UserType } from './api'
import { createAppAsyncThunk } from './thunk'





const initialState: UserType[] =[];

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
    //   state.error = action.payload.error;
    // },

  },extraReducers:(builder)=>{
    builder
      .addCase(getUser.fulfilled,(state,action)=>{

     return action.payload.items


      })
  }
});




export const getUser=createAppAsyncThunk<{items:UserType[] },any>('user/getUser',async (arg,thunkAPI:any)=>{
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const res = await usersAPI.getUsers(arg.currentPage,arg.pageSize)

return res.data



  }catch (e){
   return  rejectWithValue(null)
  }
})

export const usersSlice = slice.reducer;
export const appActions = slice.actions;