import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'

import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import { Box } from "@mui/material";
import MediaCard from "./Cart";


export type MessageType = {
    id:number
    user:UserType
    message:MessageTextType
}


 export type UserType ={
    avatar:string
    name:string
}

 export type MessageTextType={
    text:string
    time:string
}

export const message0: MessageType = {
    id: 1,
    user: {
        avatar: avatar,
        name: 'Alexander',
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?',
        time: '09:00',
    },
}
export const friendMessage0: MessageType = {
    id: 3,
    user: {
        avatar: avatar,
        name: 'Friend ',
    },
    message: {
        text: 'Hello,fine ',
        time: '09:01',
    },
}

const Dialog = () => {
    return (
      <Box sx={{ height: "100vh" }} flex={4} p={{ xs: 0, md: 2 }}>
        <div>

            <div >
                <MessageSender M={MediaCard} />
                <MediaCard message={message0}/>
            </div>
        </div></Box>
    )
}

export default Dialog
