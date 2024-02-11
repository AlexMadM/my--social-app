import React, { useEffect, useState } from "react";
import { Box, CircularProgress, createTheme, PaletteMode, Stack, ThemeProvider } from "@mui/material";
import Sidebar from "../common/components/sideBar/Sidebar";

import Navbar from "../common/components/navbar/Navbar";
import Rightbar from "../common/components/rightbar/Rightbar";
import Feed from "../common/feed/Feed";
import Add from "../common/add/Add";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Friends from "../common/components/friends/Friends";
import { useAppDispatch } from "./store";
import { getUser } from "./slice_users";

import { Login } from "../common/auth/Login";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../common/auth/auth.selectors";
import Dialog, { message0 } from "../common/components/dialogs/Dialog";
import MediaCard from "../common/components/dialogs/Cart";
import News from "../common/components/news/News";
import { me } from "../common/auth/auth.reducer";


export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
dispatch(me()); dispatch(getUser({ currentPage, pageSize }))

  }, []);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const pageSize = 4;
  const currentPage = 1;
  const getUsers = () => {
    dispatch(getUser({ currentPage, pageSize }));
  };

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode

    }
  });

  const [search, setSearch] = useState<string>("");

  // if (!isLoggedIn) {
  //   return (
  //     <div style={{ position: "fixed", top: "30%", textAlign: "center", width: "100%" }}>
  //       <CircularProgress />
  //
  //     </div>
  //   );
  // }


  return (
    <BrowserRouter>

      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar search={setSearch} />

          <Stack direction="row" spacing={2} justifyContent="space-between">

            <Sidebar onClick={getUsers} setMode={setMode} mode={mode} />
            {
              !isLoggedIn ? <Login /> :<Routes>
              <Route path={"/"} element={<Feed />} />
              <Route path={"/friends"} element={<Friends search={search} />} />
              <Route path={"/dialogs"} element={<Dialog />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/todos"} element={<MediaCard message={message0} />} />
              <Route path={"/news"} element={<News/>} />
            </Routes>}
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </BrowserRouter>

  );
};