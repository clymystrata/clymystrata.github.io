import './page.scss'

import Header from '../Header'
import {HomePage, AboutPage } from '../Body'
import Menu from '../Header/Nav/Menu'
import Footer from '../Footer'
import { HashRouter, Switch, Route } from 'react-router-dom'


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
        navTo: '/tech',
        // need the Unicode instead of &nbsp; since react escapes variable text
        text:'Tech\u00a0Blog'
    }
]

function Page(props) {
        return (
            <HashRouter basename='/'>
                <Header content={headerContent} links={headerLinks} />
                <Switch>
                    <Route path="/main-menu">
                        <Menu />
                    </Route>
                    <Route path="/tech">
                        <HomePage />    
                    </Route>
                    <Route path="/about">
                        <AboutPage  />    
                    </Route>
                    
                    <Route exact path="/">
                        <HomePage />    
                    </Route>
                </Switch>
                <Footer />
            </HashRouter>
    )
}

export default Page