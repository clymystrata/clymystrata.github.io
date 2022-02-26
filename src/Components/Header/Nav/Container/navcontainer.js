import  Media  from 'react-media'
import './navcontainer.scss'
import Menu from '../Menu'
import DropMenu from '../DropMenu'

function Nav(props) {
    return  (
        <div id="nav-container">
            <Media query="(max-width: 768px)">
                { m => m ? 
                    <DropMenu links={props.links} /> :
                    <Menu  links={props.links} /> 
                }
            </Media>
        </div>
    )
}

export default Nav