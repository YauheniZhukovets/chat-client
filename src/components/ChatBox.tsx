import React, {ChangeEvent, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ChatState} from '../context/ChatProvider';
import {createChat, fetchAllChats} from '../http/chatAPI';
import {Chat} from '../interface/interface';
import {Badge, Button, Card, Stack} from 'react-bootstrap';
import {ChatItem} from './ChatItem';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';


export const ChatBox = React.memo(() => {
    const {user, setChats, chats} = ChatState()
    const {id, chatId} = useParams<{ id: string, chatId: string }>()
    const [name, setName] = useState<string>('')

    useEffect(() => {
        if (id && user) {
            fetchAllChats(user._id, id).then((chats) => {
                setChats(chats)
            }).catch((e: any) => {
                throw new Error(e.message)
            })
        }
    }, [id, setChats, user])


    const onTypingHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onClickHandler = async () => {
        if (name.trim().length !== 0 && id && user) {
            try {
                const chat = await createChat(name, user._id, id)
                setChats([chat, ...chats])
                setName('')
            } catch (e: any) {
                throw new Error(e.message)
            }
        }
    }

    return (
        <Card style={{height: '80vh', overflowY: 'scroll', scrollbarWidth:'none'}}
              className="p-2"
        >
            <h2 className="text-center"><Badge bg="dark">Темы</Badge></h2>

            <div className="d-flex align-items-center justify-content-center">
                <Stack className="w-50" direction="horizontal" gap={3}>
                    <Form.Control className="me-auto"
                                  placeholder="Введите имя новой темы..."
                                  value={name}
                                  onChange={onTypingHandler}
                    />
                    <Button variant="outline-secondary"
                            onClick={onClickHandler}
                            disabled={name.trim().length === 0}
                    >
                        Создать
                    </Button>
                </Stack>
            </div>

            {!chats?.length
                ? <h3 className="align-self-center m-auto">
                    Диалоги отсутствуют
                </h3>
                : <></>
            }

            <div className="d-flex flex-column align-items-start">
                <Accordion className="w-100 p-1">
                    {chats && chats.map((chat: Chat, i: number) => (
                        <ChatItem key={chat._id}
                                  chat={chat}
                                  id={id}
                                  index={i}
                                  chatId={chatId}
                        />
                    ))}
                </Accordion>
            </div>
        </Card>
    )
})
