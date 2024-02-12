import React from 'react'

import { MessageType} from "../Dialog";



export type MessagePropsType = {
    message:MessageType

}

const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} >
            <div >
                <img
                    id={'hw1-avatar-' + props.message.id}

                        src={props.message.user.avatar}

                />
                <div >
                    <div id={'hw1-name-' + props.message.id}>

                        {props.message.user.name}

                    </div>
                    <pre id={'hw1-text-' + props.message.id}>

                        {props.message.message.text}

                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} >

                {props.message.message.time}

            </div>
        </div>
    )
}

export default Message
