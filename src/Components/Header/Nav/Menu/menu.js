import './menu.scss'
import {ToggleClose} from '../Toggle'
import LinkContainer from './LinkContainer'


function Menu(props) {
    return (
        <nav id="main-menu" 
            role="navigation" 
            className="main-menu"
            aria-label="Main menu">
            <ToggleClose />
            <LinkContainer links={props.links} />
        </nav>
    )
}

export default Menu