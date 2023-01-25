import React from 'react';
import {Message} from '../interface/interface';
import {ChatState} from '../context/ChatProvider';
import {isLastMessage, isSameSender, isSameSenderMargin, isSameUser} from '../utils/chatUtils';
import {Badge} from 'react-bootstrap';
import ScrollableFeed from 'react-scrollable-feed';

type MessagesType = {
    messages: Message[]
}


export const Messages: React.FC<MessagesType> = React.memo(({messages}) => {
    const {user} = ChatState()

    return (
        <ScrollableFeed>
            {messages && messages.map((m, index) => (
                <div key={m._id} style={{display: 'flex'}}>
                    {
                        ((isSameSender(messages, m, index, user._id) || isLastMessage(messages, index, user._id)))
                        && <Badge className="m-0 align-self-center p-2" bg="success">{m.sender.name}</Badge>
                    }
                    <span style={{
                        backgroundColor: `${
                            m.sender._id === user._id ? '#BEE3F8' : '#B9F5D0'
                        }`,
                        marginLeft: isSameSenderMargin(messages, m, index, user._id),
                        marginTop: isSameUser(messages, m, index) ? 3 : 10,
                        borderRadius: '20px',
                        padding: '5px 15px',
                        maxWidth: '75%',
                    }}>
                             {m.content}
                    </span>
                </div>
            ))}
        </ScrollableFeed>
    )
})