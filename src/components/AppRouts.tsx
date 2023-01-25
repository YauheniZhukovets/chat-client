import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {CHAT_ROUTE, ERROR_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from '../utils/consts';
import {LoginPage} from '../page/LoginPage';
import {ChatBox} from './ChatBox';
import {ErrorPage} from '../page/ErrorPage';
import {ChatState} from '../context/ChatProvider';

export const AppRouts = () => {

    const {user} = ChatState()

    return (
        <Routes>
            <Route path={LOGIN_ROUTE} element={<LoginPage/>}/>
            <Route path={MAIN_ROUTE} element={!user ? <LoginPage/> : <ChatBox/>}>
                <Route path={MAIN_ROUTE + ':id'} element={<ChatBox/>}>
                    <Route path={MAIN_ROUTE + ':id' + CHAT_ROUTE + ':chatId'} element={<ChatBox/>}/>
                </Route>
            </Route>
            <Route path={ERROR_ROUTE} element={<ErrorPage/>}/>
            <Route path={'*'} element={<Navigate to={'/404'}/>}/>
        </Routes>
    )
}