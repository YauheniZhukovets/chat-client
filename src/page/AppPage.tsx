import React, {useEffect} from 'react';
import {ChatState} from '../context/ChatProvider';
import {getAllUsers} from '../http/userAPI';
import {User} from '../interface/interface';
import {SideBar} from '../components/SideBar';
import {Col, Container, Row} from 'react-bootstrap';
import {Users} from '../components/Users';
import {AppRouts} from '../components/AppRouts';

function AppPage() {
    const {setUsers, user} = ChatState()

    useEffect(() => {
        getAllUsers().then((users) => {
            setUsers(users.filter((u: User) => u._id !== user?._id))
        }).catch(e => {
            throw new Error(e.message)
        })
    }, [setUsers, user])

    return (
        <div>
            {user && <SideBar/>}
            <Container className="mt-3">
                <Row>
                    {user ?
                        <Col md={3}>
                            <Users/>
                        </Col>
                        :
                        <Col md={3}>

                        </Col>
                    }
                    <Col md={!user ? 12 : 9}>
                        <AppRouts/>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default AppPage
