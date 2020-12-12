import './container.scss'
import Content from '../Content'
import Menu from '../Menu'


function MenuContainer (props) {
    
    return <header>
            <Content Title="Clymystrata" 
                SubTitle="Nothing's been settled." 
                Text="The world is a better place now that we've moved on from before." />
            <Menu />
           </header>
}

export default MenuContainer