import './toggle.scss'

function ToggleOpen(props) {
    return (
        <a  id="main-menu-toggle"
            role="button"
            href="#main-menu" 
            className="menu-toggle"
            aria-expanded="false"
            aria-controls="main-menu"
            aria-label="Open main menu">
        
            <span className="sr-only">Open main menu</span>
            <span className="fas fa-bars" aria-hidden="true"></span>
        </a>
    )
}

function ToggleClose(props) {
    return (
        <a  href="#main-menu-toggle" 
        role="button"
        id="main-menu-close"
        className="menu-close"
        aria-expanded="false"
        aria-controls="main-menu"
        aria-label="Close main menu">
        
        <span className="sr-only">Close main menu</span>
        <span className="fa fa-close" aria-hidden="true"></span>
    </a>

    )
}


export { ToggleOpen, ToggleClose }


