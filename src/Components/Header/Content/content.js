import './content.scss'
import {Link} from 'react-router-dom'


function Content (props) {
    return (
        <div id="content-container">
            <h1>
            <Link to="/">{props.Title}</Link></h1>
            <h2>{props.SubTitle}</h2>
            <p>{props.Text}</p>
        </div>
    )
}

export default Content