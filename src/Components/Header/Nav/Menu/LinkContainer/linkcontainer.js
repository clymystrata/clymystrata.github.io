import './linkcontainer.scss'
import LinkItem from '../LinkItem'

function LinkContainer(props) {
    const links = props.links
    return (
        <div id="links">
            {links.map((link, i) => 
                <LinkItem key   =       {`link${link.id}_${i}`}
                          navTo =       {link.navTo}
                          id    =       {link.id}
                          className =   'linkitem'
                          text  =       {link.text} 
                          navHandler =  {props.clickHandler} />
            )}
        </div>
    )
}

export default LinkContainer