import './homepage.scss'
import photo from '../../../assets/PiperKiss.jpg'

function HomePage(props) {
    return (
            <main id="home-page">
                <section className="content">
                    <article>
                        <h3>Welcome!</h3>
                        <p>I'm glad you made it.</p>
                        <p>For a different approach, click the button:
                        <button>Use .net</button></p>
                        <p>The about page has words about this site.</p>
                        <p>This is Piper with chapped lips.</p>
                        
                    </article>
                </section>
                <section className="photo">
                    <div className="frame">
                        <img src={photo} alt="featured"></img>
                    </div>
                </section>
            </main>
    )
}

export default HomePage