import { AppRootStateType } from "./store";
import { createSelector } from "@reduxjs/toolkit";

export const newsAct=(state:AppRootStateType)=>state.data
export const selectFriends = (state: AppRootStateType) => state.usersPage
// const [input,setInput]=useState('')

// export const filterFriends=createSelector([selectFriends],(friends)=>{
//   return friends.filter((f)=>f.name.includes(input))
// })

export const filterFriends=(search:string)=>createSelector([selectFriends],(friends)=>{
  return  friends.filter((f)=>f.name.includes(search));

})