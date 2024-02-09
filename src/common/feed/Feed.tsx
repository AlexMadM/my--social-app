import { Box, Skeleton, Stack } from '@mui/material'
import React, { useState } from 'react'
import Post from '../post/Post'
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../app/store";
import { UserType } from "../../app/api";


const Feed = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const friends = useSelector<AppRootStateType,UserType[]>(state => state.usersPage)

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {friends?.map((el,i)=>{
            return   <Post key={i} name={el.name} />
          })}

        </>
      )}
    </Box>
  )
}

export default Feed
