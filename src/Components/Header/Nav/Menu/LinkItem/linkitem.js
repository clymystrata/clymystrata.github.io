import './linkitem.scss'

function LinkItem(props) {
    return (
        <a 
            key={props.key}
            id={props.id}
            className={props.className}
            href={props.href}
            target={props.target} 
            rel={props.rel}>
            {props.text}
        </a>
    )
}

export default LinkItem