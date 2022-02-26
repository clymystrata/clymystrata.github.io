import './homepage.scss'
import photo from '../../../assets/PiperKiss.jpg'
import {Link} from 'react-router-dom'

function HomePage(props) {
    return (
            <main id="home-page">
                <section className="content">
                    <article>
                        <h3>Welcome!</h3>
                        <p>I'm glad you made it.</p>
                        <p>The <Link to='/about'
                                     className="page-link">about page</Link> has words about this site.</p>
                        <p>This is my daughter Piper:</p>
                    </article>
                </section>
                <section className="photo">
                    <div className="frame">
                        <img src={photo} alt="featured" height="1024px" width="819px"></img>
                    </div>
                </section>
            </main>
    )
}

export default HomePage