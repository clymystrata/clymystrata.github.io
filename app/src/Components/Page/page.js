import './page.scss'
import { Content, Menu } from '../Header'

const content = {
    Title: `Clymystrata`,
    SubTitle: `Nothing's been settled.`,
    Text: ``
}



function Page(props) {
        return (
        <header>
            <Content Title={content.Title}
                     SubTitle={content.SubTitle} 
                     Text={content.Text} />
            <Menu />
       </header>
    )
}

export default Page