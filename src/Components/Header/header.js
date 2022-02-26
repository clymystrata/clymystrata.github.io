import './header.scss'
import Content from './Content'
import Nav from './Nav'

function Header (props) {
    return (
        <header>
            <Content Title={props.content.Title}
                     SubTitle={props.content.SubTitle} 
                     Text={props.content.Text} />
            <Nav links={props.links}/>
       </header>
    )
}

export default Header