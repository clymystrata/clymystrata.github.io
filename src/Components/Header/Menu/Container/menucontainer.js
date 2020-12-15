import {ToggleOpen} from '../Toggle'
import Nav from '../Nav'
import './menucontainer.scss'


function Menu(props) {
    return  (
        <div id="nav-container">
            <ToggleOpen />  
            <Nav />         
        </div>
    )
}

export default Menu