import React from 'react';
import {ChatState} from '../context/ChatProvider';
import {User} from '../interface/interface';
import {Badge, Card, Stack} from 'react-bootstrap';
import {UserItem} from './UserItem';

export const Users = React.memo(() => {
    const {users} = ChatState()

    return (
        <Card style={{height: '80vh', overflowY: 'scroll', scrollbarWidth: 'none'}}
              className="d-flex flex-column align-items-center p-2"
        >
            <h2><Badge bg="dark">Пользователи</Badge></h2>
            <Stack gap={1} className="col-md-5 mx-auto">
                {users && users.map((u: User) =>
                    <UserItem key={u._id} user={u}/>
                )}
            </Stack>
        </Card>
    )
})