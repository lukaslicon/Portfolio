const { useEffect } = React;
const { createRoot } = ReactDOM;

const App = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navButtons = document.querySelectorAll('.navbar button');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        navButtons.forEach((button) => {
                            button.classList.toggle('active', button.textContent.toLowerCase() === sectionId);
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const handleScrollTo = (section) => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${section}`);
    };

    return (

        <div className="container">
            <div className="navbar">
                <button onClick={() => handleScrollTo("home")}>Home</button>
                <button onClick={() => handleScrollTo("projects")}>Projects</button>
                <button onClick={() => handleScrollTo("education")}>Education</button>
                <button onClick={() => handleScrollTo("contact")}>Contact</button>
                <span className="navbar-email">lukas@licons.com</span>
            </div>
            <div className="content">
                {/* Home*/}
                <section id="home" className="content-box">
                        <div class="top-section">
                            <h2>Lukas Daniel Licon</h2>
                            <p>Gameplay Programmer, Game Designer, Software Engineer</p>
                        </div>
                        {/*About Me*/}
                        <h2>About Me</h2>
                        <div className="about-container">
                            {/*Text about me*/}
                            <div className="about-text">
                                <p>This section is about who I am and what I do.</p>
                                <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                                <p>Ex eligendi eveniet eum accusantium impedit ut voluptatibus facilis 33 beatae sint vel libero assumenda. Sed porro ipsa et esse corrupti et quia sapiente. Eum expedita eaque quo facilis repellat non atque quam. Ut modi consequatur et quaerat esse quo eveniet sapiente. </p>
                                <p>Hic laborum voluptatem est saepe quibusdam est officia magni et tenetur ipsam et voluptates consequatur non totam aperiam. Et vitae voluptas aut voluptatem molestiae in cumque harum et doloribus soluta. Non dolorem consequatur vel tempore repellat non accusantium iusto. Quo commodi voluptatem sed consequatur Quis qui adipisci delectus et porro voluptas et debitis rerum. </p>
                            </div>
                            {/*IMG about me*/}
                            <div className="about-images">
                                <img src="path_to_your_image.jpg" alt="Description of Image" className="about-image" />
                            </div>
                        </div>
                    </section>
                {/* Projects*/}
                <section id="projects" className="content-box projects">
                    <h2>Group Projects</h2>
                    <p>This section contains a showcase about my Projects.</p>
                    <h3>Crabity</h3>
                    <p>IMG</p>
                    <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                    <h3>Chromatic Conundrum</h3>
                    <p>IMG</p>
                    <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                    <h3>Prodedural City Generation</h3>
                    <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                    <h2>Individual Projects</h2>
                    <h3>NavMesh Pathfinding</h3>
                    <p>IMG</p>
                    <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                    <h3>Ultimate TicTacToe Python Bot</h3>
                    <p>IMG</p>
                    <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                    <h3>Planet Wars Python Bot</h3>
                    <p>IMG</p>
                    <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                    <h3>Client-Server Robot State Machine in C++</h3>
                    <p>IMG</p>
                    <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                        
                    </section>
                    {/* Education*/}
                    <section id="education" className="content-box education">
                        <h2>Education</h2>
                        <div className="education-item">
                            <div className="education-logo">
                                <img src="assets\ucsc logo.jpg" alt="School Logo" className="education-logo-img" />
                            </div>
                            <div className="education-description">
                                <p>University of California, Santa Cruz, Graduated 2024</p>
                                <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                                <p>Ex eligendi eveniet eum accusantium impedit ut voluptatibus facilis 33 beatae sint vel libero assumenda. Sed porro ipsa et esse corrupti et quia sapiente. Eum expedita eaque quo facilis repellat non atque quam. Ut modi consequatur et quaerat esse quo eveniet sapiente. </p>
                                {/* Add more paragraphs as needed */}
                            </div>
                        </div>
                        <div className="education-item">
                            <div className="education-logo">
                                <img src="assets\COM-logo-color.png" alt="School Logo" className="education-logo-img" />
                            </div>
                            <div className="education-description">
                                <p>College of Marin, 2019-2022, Associates Transfer in Computer Science</p>
                                <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                                <p>Ex eligendi eveniet eum accusantium impedit ut voluptatibus facilis 33 beatae sint vel libero assumenda. Sed porro ipsa et esse corrupti et quia sapiente. Eum expedita eaque quo facilis repellat non atque quam. Ut modi consequatur et quaerat esse quo eveniet sapiente. </p>
                                {/* Add more paragraphs as needed */}
                            </div>
                        </div>
                        <div className="education-item">
                            <div className="education-logo">
                                <img src="assets\tamiscal logo.png" alt="School Logo" className="education-logo-tamiscal" />
                            </div>
                            <div className="education-description">
                                <p>High School, Class of 2019</p>
                                <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores. </p>
                                <p>Ex eligendi eveniet eum accusantium impedit ut voluptatibus facilis 33 beatae sint vel libero assumenda. Sed porro ipsa et esse corrupti et quia sapiente. Eum expedita eaque quo facilis repellat non atque quam. Ut modi consequatur et quaerat esse quo eveniet sapiente. </p>
                                {/* Add more paragraphs as needed */}
                            </div>
                        </div>
                    </section>
                    {/* Contact INFO*/}
                <section id="contact" className="content-box contact">
                    <h2>Contact</h2>
                    <div class = "contact-group">
                        <p><a href="mailto:lukas@licons.com"><img src="assets\email.png" alt="Email" className="contact-icon" /></a>
                        <a href="https://www.linkedin.com/in/lukas-licon/"><img src="assets\In-Blue.png" alt="LinkedIn" className="contact-icon" /></a>
                        <a href="https://github.com/lukaslicon"><img src="assets\github-mark.png" alt="Github" className="contact-icon" /> </a> </p>
                        </div>
                    <p>Feel free to contact me about any business inquiries.</p>
                    <p>I am currently looking for remote work or anything in the San Francisco Bay Area and open to relocation. I would love to talk about any opportunities!</p>
                    <p>Please reach out, so we can talk about what I can do to improve your team!</p>
                    </section>
            </div>
        </div>
    );
};

createRoot(document.getElementById('root')).render(<App />);
