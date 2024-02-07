import { AppRootStateType } from "./store";


export const selectFriends = (state: AppRootStateType) => state.usersPage
// const [input,setInput]=useState('')

// export const filterFriends=createSelector([selectFriends],(friends)=>{
//   return friends.filter((f)=>f.name.includes(input))
// })

