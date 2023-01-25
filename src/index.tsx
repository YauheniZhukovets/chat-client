import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppPage} from './page/AppPage';
import './index.css'
import {HashRouter} from 'react-router-dom';
import {ChatProvider} from './context/ChatProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <HashRouter>
        <ChatProvider>
            <AppPage/>
        </ChatProvider>
    </HashRouter>
)
