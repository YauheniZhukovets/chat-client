import React, {KeyboardEvent, useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {CHAT_ROUTE, MAIN_ROUTE} from '../utils/consts';
import {Chat, Message} from '../interface/interface';
import Accordion from 'react-bootstrap/Accordion';
import {Messages} from './Messages';
import {Form, Spinner} from 'react-bootstrap';
import {fetchMessages, sendMessage} from '../http/messageAPI';
import {ChatState} from '../context/ChatProvider';


type ChatItemType = {
    chat: Chat
    id?: string
    index: number
    chatId?: string
}

export const ChatItem: React.FC<ChatItemType> = React.memo(({chat, id, index, chatId}) => {
    const {user} = ChatState()
    const [text, setText] = useState<string>('')
    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (chatId) {
            setLoading(true)
            fetchMessages(chatId).then((messages) => {
                setMessages(messages)
                setLoading(false)
            }).catch(e => {
                setLoading(false)
                throw new Error(e.message)
            })
        }
    }, [chatId])


    const onEnterClickHandler = async (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (user && text.trim().length && e.key === 'Enter') {
            try {
                const message = await sendMessage(user._id, chat._id, text.trim())
                setMessages([...messages, message])
                setText('')
            } catch (e: any) {
                throw new Error(e.message)
            }
        }
    }

    return (
        <NavLink to={MAIN_ROUTE + `${id}` + CHAT_ROUTE + `${chat._id}`}>
            <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{chat.chatName}</Accordion.Header>
                <Accordion.Body>
                    {loading
                        ? <div className="d-flex justify-content-center align-items-center">
                            <Spinner animation="border"/>
                        </div>

                        : <Messages messages={messages}/>
                    }
                    <Form className="d-flex flex-column p-2">
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea"
                                          rows={2}
                                          value={text}
                                          onChange={(e) => setText(e.target.value)}
                                          placeholder='Нажмите "Enter", что бы отправить сообщение'
                                          onKeyDown={onEnterClickHandler}
                            />
                        </Form.Group>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </NavLink>
    )
})
