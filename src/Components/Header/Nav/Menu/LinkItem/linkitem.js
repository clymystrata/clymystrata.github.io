import './linkitem.scss'
import { Link } from 'react-router-dom'

function LinkItem(props) {
    return (
        <Link   to={props.navTo} 
                key={props.key}
                id={props.id}
                className={props.className}
                onClick = {e => props.navHandler(e)}>
            {props.text}
        </Link>
    )
}

export default LinkItem