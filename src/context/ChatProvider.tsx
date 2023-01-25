import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {LOGIN_ROUTE} from '../utils/consts';
import {Chat, User} from '../interface/interface';

const ChatContext = React.createContext<any>(null)

type ChatProviderType = {
    children?: React.ReactNode
}

export const ChatProvider: React.FC<ChatProviderType> = ({children}) => {
    const navigate = useNavigate()

    const [user, setUser] = useState<User>()
    const [users, setUsers] = useState<User[]>()
    const [chats, setChats] = useState<Chat[]>()


    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo')!)
        setUser(userInfo)

        if (!userInfo) {
            navigate(LOGIN_ROUTE)
        }
    }, [navigate])

    return (
        <ChatContext.Provider value={{
            users,
            setUsers,
            user,
            setUser,
            chats,
            setChats,
        }}>
            {children}
        </ChatContext.Provider>)
}


export const ChatState = () => {
    return useContext(ChatContext)
}