import './menuitem.scss'

function MenuItem(props) {
    return (
        <a 
            id={props.id}
            className={props.className}
            href={props.href}
            target={props.target} 
            rel={props.rel}>
            {props.text}
        </a>
    )
}