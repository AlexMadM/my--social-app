import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { appActions } from "./app.reducer";
import { authAPI, LoginParamsType } from "./auth.api";
import { createAppAsyncThunk } from "../../app/thunk";
import { AppThunk } from "../../app/store";



const slice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    });
  },
});

// thunks
const login = createAppAsyncThunk<{ isLoggedIn: boolean }, LoginParamsType>(
  `${slice.name}/login`,
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {

      const res = await authAPI.login(arg);
      if (res.data.resultCode === 0) {

        return { isLoggedIn: true };
      } else {

        return rejectWithValue(null);
      }
    } catch (e) {

      return rejectWithValue(null);
    }
  },
);

export const logoutTC = (): AppThunk => (dispatch) => {

  authAPI
    .logout()
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(authActions.setIsLoggedIn({ isLoggedIn: false }));


      } else {

      }
    })
    .catch((error) => {

    });
};

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { login };
