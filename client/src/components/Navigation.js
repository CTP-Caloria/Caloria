import  React  from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AuthButton from './componenets/AuthButton';
//import Image from 'react-bootstrap/Image'

export default class Navigation extends React.Component {
    render() {
        return (


            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand href="home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="search">Search</Nav.Link>
                        <Nav.Link href="about-us">About Us</Nav.Link>
                        <Nav.Link href="recipe">Recipe</Nav.Link>
                        <Nav.Link href="food">Food</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="calorie-journal">Calorie Journal</Nav.Link>
                        <Nav.Link href="recipe-box"> Recipe Box</Nav.Link>
                        <Nav.Link href="create-recipe">Create Recipe</Nav.Link>
                        <Nav.Link href="profile"> Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}