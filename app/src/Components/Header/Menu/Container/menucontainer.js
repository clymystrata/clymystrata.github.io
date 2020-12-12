import './menucontainer.scss'
import MenuIcon from '../../../../assets/menu.svg';

function Menu(props) {
    return  (
        <div id="nav-container">
            <a  href="#main-menu" 
                role="button"
                id="main-menu-toggle"
                className="menu-toggle"
                aria-expanded="false"
                aria-controls="main-menu"
                aria-label="Open main menu">

                <span className="sr-only">Open main menu</span>
                <span className="fas fa-bars" aria-hidden="true"></span>
            </a>
            <nav id="main-menu" 
                role="navigation" 
                className="main-menu"
                aria-expanded="false"
                aria-label="Main menu">
                <a  href="#main-menu-toggle" 
                    role="button"
                    id="main-menu-close"
                    className="menu-close"
                    aria-expanded="false"
                    aria-controls="main-menu"
                    aria-label="Close main menu">
                    
                    <span className="sr-only">Close main menu</span>
                    <span className="fa fa-close" aria-hidden="true"></span>
                </a>
            
                <div id="links">
                    <a href="#" target="_top">Home</a>
                    <a href="http://rsmellow.com/me" target="_blank">About</a>
                    <a href="http://tech.rsmellow.net" target="_blank">Tech&nbsp;Blog</a>
                </div>
            </nav>
        </div>

    )
}

export default Menu