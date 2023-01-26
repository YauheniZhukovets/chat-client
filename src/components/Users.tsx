import React, {useState} from 'react';
import {ChatState} from '../context/ChatProvider';
import {User} from '../interface/interface';
import {Badge, Button, Card, Stack} from 'react-bootstrap';
import {UserItem} from './UserItem';
import Form from 'react-bootstrap/Form';
import {getAllUsers} from '../http/userAPI';

export const Users = React.memo(() => {
    const {user, users, setUsers} = ChatState()
    const [search, setSearch] = useState<string>('')

    const handleSearch = async () => {
        if (user) {
            getAllUsers(search).then((users) => {
                setUsers(users)
                setSearch('')
            }).catch(e => {
                throw new Error(e.message)
            })
        }
    }

    return (
        <Card style={{height: '80vh', overflowY: 'scroll', scrollbarWidth: 'none'}}
              className="d-flex flex-column align-items-center p-2"
        >

            <h2><Badge bg="dark">Пользователи</Badge></h2>

            <Stack className="w-100 mb-3" direction="horizontal" gap={3}>
                <Form.Control placeholder="Введите имя пользователя"
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="outline-secondary"
                        onClick={handleSearch}
                        disabled={search.trim().length === 0}
                >
                    Найти
                </Button>
            </Stack>

            <Stack gap={1} className="col-md-5 mx-auto">
                {users && users.map((u: User) =>
                    <UserItem key={u._id} user={u}/>
                )}
            </Stack>
        </Card>
    )
})