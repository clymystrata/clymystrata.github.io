import './footer.scss'

function Footer(props){
    return (
        <footer>
            <p>&copy; {(new Date()).getFullYear()} RSMellow.com</p>
        </footer>
    )
}

export default Footer