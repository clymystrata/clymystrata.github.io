import './nav.scss'
import {ToggleClose} from '../Toggle'

function Nav(props) {
    return (
        <nav id="main-menu" 
            role="navigation" 
            className="main-menu"
            aria-label="Main menu">
            <ToggleClose />
            <div id="links">
                <a href="/" target="_top">Home</a>
                <a href="http://rsmellow.com/me" target="_blank" rel="noreferrer">About</a>
                <a href="http://tech.rsmellow.net" target="_blank" rel="noreferrer">Tech&nbsp;Blog</a>
            </div>
        </nav>
    )
}

export default Nav
