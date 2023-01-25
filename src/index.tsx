import React from 'react';
import ReactDOM from 'react-dom/client';
import AppPage from './page/AppPage';
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {ChatProvider} from './context/ChatProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <BrowserRouter>
        <ChatProvider>
            <AppPage/>
        </ChatProvider>
    </BrowserRouter>
)
