import { UserType } from "./api";
import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./slice_users";
import { createAppAsyncThunk } from "./thunk";

export type news={
  author:string |null,
  content:string,
  description:string,
  publishedAt:string,
  source:Sours,
  title:string,
  url?:string,
  urlToImage:string,
}
export type Sours={
  id:null
  name:string
}



const initialState: news[] =[];

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {


  },extraReducers:(builder)=>{
    builder
      .addCase(fetchData.fulfilled,(state,action)=>{
console.log(action.payload.articles)
        return action.payload.articles


      })
  }
});

export const fetchData=createAppAsyncThunk<{articles:news[] }>('data/fetchData',async (_,thunkAPI:any)=>{
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f"
    );

    return res.json()
  }catch (e){
    return  rejectWithValue(null)
  }
})
export const data = slice.reducer;
export const authActions = slice.actions;
export const authData = { fetchData };
