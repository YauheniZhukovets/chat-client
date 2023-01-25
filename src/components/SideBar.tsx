import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {ChatState} from "../context/ChatProvider";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";


export const SideBar = React.memo(() => {
    const navigate = useNavigate()
    const {user} = ChatState()

    const logOut = () => {
        localStorage.removeItem("userInfo");
        navigate(LOGIN_ROUTE)
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>{user?.name}</Navbar.Brand>

                    <Button className="m-1"
                            variant="outline-primary"
                            onClick={logOut}
                    >Выйти
                    </Button>
                </Container>
            </Navbar>
        </div>
    )
})