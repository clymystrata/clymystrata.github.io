import './navcontainer.scss'
import {ToggleOpen} from '../Toggle'
import Menu from '../Menu'



function Nav(props) {
    return  (
        <div id="nav-container">
            <ToggleOpen />  
            <Menu  links={props.links} />         
        </div>
    )
}

export default Nav