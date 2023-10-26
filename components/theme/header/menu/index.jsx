import React, { useState } from 'react';
import './css/style.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import LocaleLink from '../Locale'


export default function Index() {


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/categoria">Categoria</Nav.Link>
                            <Nav.Link href="/produto">Produto</Nav.Link>

                            <NavDropdown title="Idiomas" id="basic-nav-dropdown">
                                <LocaleLink />
                                
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

