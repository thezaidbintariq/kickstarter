import React from 'react'
import Menu from './menu'
import { Container } from "semantic-ui-react";
import Head from "next/head";

function layout(props) {
    return (
        <div>
        <Container>
            <Menu/>
            {props.children}
        </Container>
        </div>
    )
}

export default layout
