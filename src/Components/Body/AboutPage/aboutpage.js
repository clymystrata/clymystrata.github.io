import './aboutpage.scss'

function AboutPage(props) {
    return (
            <main id="about-page">
                <section className="content">
                    <article>
                    <p>Although given the name:
                    <h3>Randolph Scott Mellow</h3>
                    pretty much everyone <span className="aside">(with certain specific, endearing exceptions)</span> calls me <span className="h3">Randy</span>.</p>
                    <p>
                        I believe that people are a wonderment of divine complexity and, to wit, 
                        cannot be fathomed <span className="aside">(let alone known)</span> via <a  
                                href="https://en.wikipedia.org/wiki/Wikipedia:Autobiography#The_problem_with_autobiographies" 
                                target="_blank" 
                                rel="noopener noreferrer">autobiographical blurbs</a> posted here and there on the Internet.</p>
                    <p>That being said, here are links to some autobiographical blurbs I've posted here and there on the Internet:</p>
                    <ul>
                        <li><a href="http://www.linkedin.com/in/rsmellow" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/rsmellow" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="http://www.facebook.com/rsmellow" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <ul>
                                <li><a href="http://www.facebook.com/rsmellowphoto" target="_blank" rel="noopener noreferrer">Photography Page</a></li>
                            </ul>
                        </li>
                        <li><a href="http://www.instagram.com/rsmellow" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="http://www.twitter.com/rsmellow" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                    
                    <p>For those with deeper yearnings a quick <a href="https://bit.ly/3h730HT" target="_blank" rel="noopener noreferrer">Google</a> should suffice.</p>
                    
                    <p>I am a new father, an old programmer an out-of-practice musician and avid photographer who likes fantasy novels, 
                       science fiction movies and dramatically intense storytelling.
                       This is my endevour to expound upon all that.
                    </p>
                    </article>
                </section>
            </main>
    )
}

export default AboutPage