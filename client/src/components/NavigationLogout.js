import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AuthButton from '../components/AuthButton';
import { NavLink, Link } from 'react-router-dom';


export default class NavigationLogout extends React.Component {

    // state = {
    //     bg:"transparent",
    //     variant: "light"
    // }

    // listenScrollEvent = e => {
    //     if (window.scrollY > 50) {
    //       this.setState({ bg: "light", variant: "light" });
    //     } else {
    //       this.setState({ bg: "transparent", variant: "light" });
    //     }
    // };
    
    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg="light" variant="light" sticky="top">
                <Navbar.Brand>
                    <Link to="/" style={{ textDecoration: 'none'}} className="text-dark">
                        <img
                            alt="logo"
                            src="icon-transparent.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Caloría
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" exact to="/about-us">
                            About Us
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" exact to="/signup">
                            Register
                        </NavLink>
                        
                        <AuthButton />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}