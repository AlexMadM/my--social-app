import React, { useState } from "react";
import { Box, createTheme, PaletteMode, Stack, ThemeProvider } from "@mui/material";
import Sidebar from "../common/components/sideBar/Sidebar";

import Navbar from "../common/components/navbar/Navbar";
import Rightbar from "../common/components/rightbar/Rightbar";
import Feed from "../common/feed/Feed";
import Add from "../common/add/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Friends from "../common/components/friends/Friends";
import { useAppDispatch } from "./store";
import { getUser } from "./slice_users";

import { Login } from "../common/auth/Login";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../common/auth/auth.selectors";
import Dialog, { message0 } from "../common/components/dialogs/Dialog";
import MediaCard from "../common/components/dialogs/Cart";


export const App = () => {
  const dispatch = useAppDispatch();
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


  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar search={setSearch} />

          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar onClick={getUsers} setMode={setMode} mode={mode} />
            <Routes>
              <Route path={"/"} element={<Feed />} />
              <Route path={"/friends"} element={<Friends search={search} />} />
              <Route path={"/dialogs"} element={<Dialog />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/todos"} element={<MediaCard message={message0} />} />
            </Routes>
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </BrowserRouter>

  );
};