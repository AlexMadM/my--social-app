// import { isAxiosError } from 'axios'
// import { Dispatch } from 'redux'
//
//
//
// export const handleError=(e:unknown,dispatch:Dispatch)=>{
//   let errorMessage:string
//   if(isAxiosError<ServerError>(e)){
//     errorMessage= e.response ? e.response.data.errorMessages[0].message : e.message
//   }else {
//     errorMessage=(e as Error).message
//   }
//   console.log(errorMessage)
//   dispatch(setAppError(errorMessage))
// }
//
// export type ServerError={
//   errorMessages:Array<{field:string;message:string}>
// }