import React from 'react';
import {ChatState} from '../context/ChatProvider';
import {SideBar} from '../components/SideBar';
import {Col, Container, Row} from 'react-bootstrap';
import {Users} from '../components/Users';
import {AppRouts} from '../components/AppRouts';

export const AppPage = React.memo(() => {
    const {user} = ChatState()

    return (
        <div>
            {user && <SideBar/>}
            <Container className="mt-3">
                <Row>
                    {user ?
                        <Col md={4}>
                            <Users/>
                        </Col>
                        :
                        <Col md={4}>

                        </Col>
                    }
                    <Col md={!user ? 12 : 8}>
                        <AppRouts/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
})
