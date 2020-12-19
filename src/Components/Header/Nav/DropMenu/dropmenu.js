import React from 'react'
import '../Menu/menu.scss'
import './dropmenu.scss'
import LinkContainer from '../Menu/LinkContainer'

class DropMenu extends React.Component {

    constructor() {
        super()
        this.state = { showMenu: false, iClass: "fa fa-bars" }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu (e) {
        e.preventDefault()
        this.setState(prev => { 
            const iClass = prev.showMenu ? "fa fa-bars" : "fa fa-close"
            return {showMenu: !prev.showMenu, iClass: iClass} 
        })
    }

    render() {
        return (
            <nav id="main-menu" 
                role="navigation" 
                className="main-menu"
                aria-label="Main menu">
                <button className="menu-toggle" onClick={this.toggleMenu}>
                <i className= {this.state.iClass}></i>
                </button>
                { 
                    this.state.showMenu &&
                    <LinkContainer links={this.props.links} />
                }
            </nav>
        )
    }
}

export default DropMenu