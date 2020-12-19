import './aboutpage.scss'

function AboutPage(props) {
    return (
            <main id="about-page">
                <section className="content">
                    <article>
                        <p>I am</p>
                        <h3>Randoph Scott Mellow</h3>
                        <p>
                            Pretty much everyone calls me Randy with certain specific, endearing exceptions. 
                            I truly believe that people are a wonderment of divine complexity and, to wit, cannot be 
                            fathomed (let alone known) via autobiographical blurbs posted here and there on the Internet. 
                            That being said, here are the links to most of my <b>autobiographical blurbs</b> posted here and there on the Internet:
                        </p>
                        <ul>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Facebook
                                <ul>
                                    <li>Photography Page</li>
                                </ul>
                            </li>
                            <li>Instagram</li>
                            <li>Flickr</li>
                            <li>tumblr</li>

                        </ul>

                        <p>For those of you with deeper yearnings <b>Google is your friend</b>. 
                        I am a new father, an old programmer an out-of-practice musician and 
                        avid photographer who likes fantasy novels, science fiction movies 
                        and dramatically intense storytelling.</p>
                        <p>Here is where I’ll expand upon all that…</p>
                    </article>
                </section>
            </main>
    )
}

export default AboutPage