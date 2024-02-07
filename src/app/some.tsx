import React from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "./store";

const Some = () => {
  const friends = useSelector<AppRootStateType>(state => state.usersPage)
  return (
    <div>
      {

      }
    </div>
  );
};

export default Some;