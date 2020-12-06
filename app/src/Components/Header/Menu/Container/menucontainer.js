import './menucontainer.css'
import MenuIcon from '../../../../assets/menu.svg';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Menu(props) {
    return  (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="menu-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end align-self-start" >
            <Nav >
                <Nav.Link href="http://rsmellow.com">Home</Nav.Link>
                <Nav.Link href="http://rsmellow.com/me">About</Nav.Link>
                <Nav.Link href="http://tech.rsmellow.net" alt="tech blog">Tech Blog</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Menu