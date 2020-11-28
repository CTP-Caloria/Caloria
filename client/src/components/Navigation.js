import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AuthButton from '../components/AuthButton';
import { NavLink, Link } from 'react-router-dom';

export default class Navigation extends React.Component {
    state = {
        bg: "transparent",
        variant: "dark",    
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
                <Navbar.Brand>
                    <Link to="/" style={{ textDecoration: 'none'}} className="text-light">
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
                        <NavLink className="nav-link" exact to="/search">
                            Search
                    </NavLink>

                        <NavLink className="nav-link" exact to="/about-us">
                            About Us
                    </NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" exact to="/calorie-journal">
                            Calorie Journal
                    </NavLink>

                        <NavLink className="nav-link" exact to="/create-recipe">
                            Create Recipe
                    </NavLink>

                        <NavLink className="nav-link" exact to="/profile">
                            Profile
                    </NavLink>

                        <AuthButton />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
        
}



