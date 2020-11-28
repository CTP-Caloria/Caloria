import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AuthButton from '../components/AuthButton';
import {NavLink} from 'react-router-dom';


export default class NavigationLogout extends React.Component {

    state= {
        bg:"transparent",
        variant: "dark"
    }

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
          this.setState({ bg: "light", variant: "light" });
        } else {
          this.setState({ bg: "transparent", variant: "dark" });
        }
    };
    
    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg={this.state.bg} variant={this.state.variant} sticky="top">
                <NavLink className="nav-link" exact to="/">
                    <img 
                        alt="logo"
                        src="icon-transparent.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Caloría</NavLink>
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