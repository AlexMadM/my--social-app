import React from 'react'
import { MessageType} from "../Dialog";

type FriendMessagePropsType={
    message:MessageType
}


const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}

        >
            <div >
                <img
                    id={'hw1-friend-avatar-' + props.message.id}

                    src={props.message.user.avatar}

                />
                <div >
                    <div
                        id={'hw1-friend-name-' + props.message.id}

                    >

                        {props.message.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}

                    >

                        {props.message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}

            >
                {props.message.message.time}

            </div>
        </div>
    )
}

export default FriendMessage
