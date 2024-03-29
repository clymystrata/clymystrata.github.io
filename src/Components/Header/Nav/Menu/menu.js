import './menu.scss'
import LinkContainer from './LinkContainer'

function Menu(props) {
    return (
        <nav id="main-menu" 
            role="navigation" 
            className="main-menu"
            aria-label="Main menu">
            <LinkContainer links={props.links} clickHandler = {e => null}/>
        </nav>
    )
}

export default Menu