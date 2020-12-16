import './linkcontainer.scss'
import LinkItem from '../LinkItem'

function LinkContainer(props) {
    const links = props.links
    return (
        <div id="links">
            {links.map((link, i) => 
                <LinkItem id    =   {link.id}
                          className = 'linkitem'
                          key   =   {`{link.href}_{i}`}
                          href  =   {link.href}
                          target=   {link.target}
                          rel   =   {link.rel}
                          text  =   {link.text} />

            )}
        </div>
    )
}

export default LinkContainer