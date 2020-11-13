import  React  from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AuthButton from '../components/AuthButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from 'react-router-dom';

//import Image from 'react-bootstrap/Image'

export default class Navigation extends React.Component {
    render() {
        return (


            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand href="/home">Logo</Navbar.Brand>
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

                        <NavLink className="nav-link" exact to="/recipe-box">
                            Recipe Box
                        </NavLink>

                        <NavLink className="nav-link" exact to="/create-recipe">
                            Create Recipe
                        </NavLink>

                        <NavLink className="nav-link" exact to="/profile">
                            Profile
                        </NavLink>

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