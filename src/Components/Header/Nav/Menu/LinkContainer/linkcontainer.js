import './linkcontainer.scss'
import LinkItem from '../LinkItem'

function LinkContainer(props) {
    const links = props.links
    return (
        <div id="links" >
            {links.map((link, i) => 
                <LinkItem navTo =       {link.navTo}
                          id    =       {link.id}
                          className =   'linkitem'
                          text  =       {link.text} />

            )}
        </div>
    )
}

export default LinkContainer