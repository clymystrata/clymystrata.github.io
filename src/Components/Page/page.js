import './page.scss'

import Header from '../Header'
import {HomePage, AboutPage, BlogPage } from '../Body'
import Menu from '../Header/Nav/Menu'
import Footer from '../Footer'
import {Switch, Route, useLocation } from 'react-router-dom'


const headerContent = {
    Title: `Clymystrata`,
    SubTitle: `Nothing's been settled`,
    Text: ``
}

const headerLinks = [
    {
        navTo: '/',
        text:'Home'
    }, {
        navTo: '/about',
        text:'About'
    }, {
        navTo: '/tech?article=blip',
        // need the Unicode instead of &nbsp; since react escapes variable text
        text:'Tech\u00a0Blog'
    }
]

function useQuery() {
    const loc = useLocation()
    if(!loc) return
    
    const q = loc.search
    if(!q) return
    
    const params = new URLSearchParams(q)
    return params.get('article')
}

function Page(props) {
        return (
            <div>
                <Header content={headerContent} links={headerLinks} />
                <Switch>
                    <Route path="/main-menu">
                        <Menu />
                    </Route>
                    <Route path="/tech">
                        <BlogPage article={useQuery()}/>    
                    </Route>
                    <Route path="/about">
                        <AboutPage  />    
                    </Route>
                    <Route path="/me">
                        <AboutPage  />    
                    </Route>
                    <Route exact path="/">
                        <HomePage />    
                    </Route>
                </Switch>
                <Footer />
            </div>
   )
}

export default Page