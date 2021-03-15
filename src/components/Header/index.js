import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './style.css'

export default function index(props) {
    return (
        <header>
            {/* <!-- Collapsible navigation bar --> */}
            <Navbar collapseOnSelect expand='lg' className="navbar navbar-expand-md navbar-dark">

                <Navbar.Brand href="#">
                    <img id="navbar-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/University_of_Washington_Block_W_logo_RGB_brand_colors.SVG/1200px-University_of_Washington_Block_W_logo_RGB_brand_colors.SVG.png"
                        width="60" height="40" className="align-middle" alt="UW Logo" />
                </Navbar.Brand>

                {/* <!-- Wordmark --> */}
                <div id="wordmark">
                    <h1>MARK TRUPIANO</h1>
                    <h2>Full Stack Web Developer</h2>
                    <h2>Graduate Certificate in Software Design & Development</h2>
                    <h2>B.S. Mechanical Engineering</h2>
                </div>

                {/* <!-- Collapse/expand button (only shows on 'small' screens) --> */}
                <Navbar.Toggle className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                {/* <!-- List of nav items --> */}
                <Navbar.Collapse className="navbar-collapse collapse hide" id="navbarCollapse">
                    <Nav className="nav navbar-nav ml-auto">
                        <Nav.Link href='./home' className={'nav-item nav-link btn-lg' + (props.active==='home' ? ' active' : '')}>About Me</Nav.Link>
                        <Nav.Link href='./portfolio' className={'nav-item nav-link btn-lg' + (props.active === 'portfolio' ? ' active' : '')}>Portfolio</Nav.Link>
                        <Nav.Link href='./contact' className={'nav-item nav-link btn-lg' + (props.active === 'contact' ? ' active' : '')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </header>
    )
}
