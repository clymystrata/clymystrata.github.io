import './page.scss'
import Header from '../Header'

const content = {
    Title: `Clymystrata`,
    SubTitle: `Nothing's been settled.`,
    Text: ``
}

const links = [
    {
        href:'/',
        rel:'',
        target:'_top',
        text:'Home'
    }, {
        href:'http://rsmellow.com/me',
        rel:'noreferrer',
        target:'_blank',
        text:'About'
    }, {
        href:'http://tech.rsmellow.net',
        rel:'noreferrer',
        target:'_blank',
        text:'Tech\u00a0Blog'
    }
]

function Page(props) {
        return (
            <Header content={content}
                    links= {links} />
    )
}

export default Page