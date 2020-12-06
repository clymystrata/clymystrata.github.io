import './content.css'


function Content (props) {
    return <div className="header-content">
            <h1>{props.Title}</h1>
            <h2>{props.SubTitle}</h2>
            <p>{props.Text}</p>
        </div>
}

export default Content