const { useState } = React;
const { createRoot } = ReactDOM;

const App = () => {
    const [currentSection, setCurrentSection] = useState('about');

    const renderSection = () => {
        switch (currentSection) {
            case 'about':
                return (
                    <section id="home" className="content-box">
                        <h2>About Me</h2>
                        <div className="about-container">
                            <div className="about-text">
                                <p>Hello, I'm Lukas Licon, a passionate software engineer and game designer with a Bachelor's degree in Computer Science: Computer Game Design from UC Santa Cruz. My fascination with technology and video games began at a young age, fueled by countless hours immersed in MMORPGs like World of Warcraft. This early passion evolved into a career ambition to create immersive and engaging game experiences that captivate players as I was once captivated.</p>
                                <p>My academic journey has been a blend of rigorous coursework and hands-on projects that have equipped me with a solid foundation in programming and game development. Each project has been a step forward in my journey, shaping my technical abilities and creative vision.</p>
                                <p>Beyond my technical skills, I am driven by a collaborative spirit and a desire to continuously learn and grow. Working with cross-functional teams has taught me the importance of communication and teamwork in achieving project goals. I am committed to staying updated with the latest industry trends and technologies, always seeking new knowledge to enhance my craft. My goal is to use my skills and experiences to create innovative solutions that entertain, educate, and empower users, contributing to a future where technology and creativity intersect to make a positive impact.</p>
                            </div>
                            {/* IMG about me */}
                            <div className="about-image">
                                <img src="assets\profile.jpg" alt="Profile Image" className="about-image" />
                            </div>
                        </div>
                    </section>
                );
            case 'group projects':
                return (
            <section id="group projects" className="content-box Gprojects">
                    <h2>Group Projects</h2>
                    <h3>Crabity</h3>
                    <h5><a href="https://store.steampowered.com/app/2988850/Crabity/"> Link to Steam</a></h5>
                    <div className="gprojects-item">
                        <div className="gprojects-logo">
                            <img src="assets\crabity screenshot.png" alt="Crabity Logo" className="gprojects-logo-img" />
                        </div>
                        <div className="gprojects-box">
                            <div className="gprojects-title">
                                <h4>Project Description</h4>
                            </div>
                            <div className="gprojects-description">
                                <p>Embark on a cosmic adventure as a duo of two robot crabs stranded in the vastness of space. See the world from a different angle and utilize the power of gravity to escape the space station and return back to Earth!</p>
                            </div>
                        </div>
                        <div className="gprojects-box">
                            <div className="gprojects-title">
                                <h4>Contributions</h4>
                            </div>
                            <div className="gprojects-contributions">
                                <p>-Created daily generated maps using weighted pathfinding and procedural generation based on movement.</p>
                            </div>
                        </div>
                    </div>
                    <h3>Chromatic Conundrum</h3>
                    <h5><a href="https://ernaniraffo.itch.io/chromatic-tower-defense"> Link to itch.io</a></h5>
                    <div className="gprojects-item">
                        <div className="gprojects-logo">
                            <img src="assets\crabity screenshot.png" alt="Chromatic" className="gprojects-logo-img" />
                        </div>
                        <div className="gprojects-description">
                            <p>Chromatic Tower Defense is a strategy game where players defend their realm using the power of chromatic towers. Set in a vibrant and colorful world, players must build and upgrade towers, each using a unique color spectrum to defend the waves of monochromatic invaders. We offer an immersive experience for strategy game enthusiasts with stunning graphics and unique color-based gameplay mechanics.</p>
                            <p>I implemented the AI enemy pathfinding, UI/UX implementation, system interactions, and enemy spawning and wave system.</p>
                        </div>
                    </div>
                    <h3>Procedural City Generation</h3>
                    <h5><a href="https://github.com/Procedural-BananaSlug-Studios/PCG-City-Generator"> Link to Github</a></h5>
                    <div className="gprojects-item">
                        <div className="gprojects-logo">
                            <img src="assets\crabity screenshot.png" alt="ProcGen City" className="gprojects-logo-img" />
                        </div>
                        <div className="gprojects-description">
                            <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores.</p>
                        </div>
                    </div>
                </section>
                );
            case 'individual projects':
                return (
                <section id="individual projects" className="content-box Iprojects">
                    <h2>Individual Projects</h2>
                    <h3>NavMesh Pathfinding</h3>
                    <h5><a href="https://github.com/lukaslicon/CMPM146-P1"> Link to Github</a></h5>
                    <div className="iprojects-item">
                        <div className="iprojects-description">
                            <p>This Python project implements a bidirectional A* search algorithm to find paths in navmeshes created from user-provided images. The program takes an image and its corresponding navmesh representation as input and outputs an image showing the path from a source to a destination point defined interactively.</p>
                        </div>
                        <div className="iprojects-logo">
                            <img src="assets\crabity screenshot.png" alt="NavMesh Pathfinding" className="iprojects-logo-img" />
                        </div>
                    </div>
                    <h3>Ultimate TicTacToe Python Bot</h3>
                    <h5><a href="https://github.com/CZarko/P2"> Link to Github</a></h5>
                    <div className="iprojects-item">
                        <div className="iprojects-description">
                            <p>This project involves creating a bot that plays Ultimate Tic-Tac-Toe using Monte Carlo Tree Search (MCTS) in Python. Ultimate Tic-Tac-Toe is an advanced version of the classic Tic-Tac-Toe game where players play on a grid of 9 smaller Tic-Tac-Toe boards to complete a giant row, column, or diagonal. The MCTS bot will be evaluated through various experiments to ensure its effectiveness and performance.</p>
                        </div>
                        <div className="iprojects-logo">
                            <img src="assets\crabity screenshot.png" alt="NavMesh Pathfinding" className="iprojects-logo-img" />
                        </div>
                    </div>
                    <h3>Planet Wars Python Bot</h3>
                    <h5><a href="https://github.com/lukaslicon/P3-Behavior-Trees-for-Planet-Wars"> Link to Github</a></h5>
                    <div className="iprojects-item">
                        <div className="iprojects-description">
                            <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores.</p>
                        </div>
                        <div className="iprojects-logo">
                            <img src="assets\crabity screenshot.png" alt="NavMesh Pathfinding" className="iprojects-logo-img" />
                        </div>
                    </div>
                    <h3>Client-Server Robot State Machine in C++</h3>
                    <h5><a href="https://github.com/lukaslicon/robotStateMachine"> Link to Github</a></h5>
                    <div className="iprojects-item">
                        <div className="iprojects-description">
                            <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores.</p>
                        </div>
                        <div className="iprojects-logo">
                            <img src="assets\crabity screenshot.png" alt="NavMesh Pathfinding" className="iprojects-logo-img" />
                        </div>
                    </div>
                </section>
                );
            case 'education':
                return (
                    <section id="education" className="content-box education">
                    <h2>Education</h2>
                    <div className="education-item">
                        <div className="education-logo">
                            <img src="assets\ucsc logo.jpg" alt="School Logo" className="education-logo-img" />
                        </div>
                        <div className="education-description">
                            <p>University of California, Santa Cruz, Graduated 2024</p>
                            <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores.</p>
                            <p>Ex eligendi eveniet eum accusantium impedit ut voluptatibus facilis 33 beatae sint vel libero assumenda. Sed porro ipsa et esse corrupti et quia sapiente. Eum expedita eaque quo facilis repellat non atque quam. Ut modi consequatur et quaerat esse quo eveniet sapiente.</p>
                        </div>
                    </div>
                    <div className="education-item">
                        <div className="education-logo">
                            <img src="assets\COM-logo-color.png" alt="School Logo" className="education-logo-img" />
                        </div>
                        <div className="education-description">
                            <p>College of Marin, 2019-2022, Associates Transfer in Computer Science</p>
                            <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores.</p>
                            <p>Ex eligendi eveniet eum accusantium impedit ut voluptatibus facilis 33 beatae sint vel libero assumenda. Sed porro ipsa et esse corrupti et quia sapiente. Eum expedita eaque quo facilis repellat non atque quam. Ut modi consequatur et quaerat esse quo eveniet sapiente.</p>
                        </div>
                    </div>
                    <div className="education-item">
                        <div className="education-logo">
                            <img src="assets\tamiscal logo.png" alt="School Logo" className="education-logo-tamiscal" />
                        </div>
                        <div className="education-description">
                            <p>High School, Class of 2019</p>
                            <p>Lorem ipsum dolor sit amet. Et sint atque ut excepturi dolores et aspernatur quia qui aperiam reiciendis qui esse sequi ut enim error. Aut minus expedita vel consequuntur delectus aut vero dicta! Eum doloribus aliquam et adipisci voluptates quo mollitia repudiandae ut quae maiores.</p>
                            <p>Ex eligendi eveniet eum accusantium impedit ut voluptatibus facilis 33 beatae sint vel libero assumenda. Sed porro ipsa et esse corrupti et quia sapiente. Eum expedita eaque quo facilis repellat non atque quam. Ut modi consequatur et quaerat esse quo eveniet sapiente.</p>
                        </div>
                    </div>
                </section>
                );
            case 'contact':
                return (
                <section id="contact" className="content-box contact">
                    <h2>Contact</h2>
                    <div className="contact-group">
                        <p>
                            <a href="mailto:lukas@licons.com"><img src="assets\email.png" alt="Email" className="contact-icon" /></a>
                            <a href="https://www.linkedin.com/in/lukas-licon/"><img src="assets\In-Blue.png" alt="LinkedIn" className="contact-icon" /></a>
                            <a href="https://github.com/lukaslicon"><img src="assets\github-mark.png" alt="Github" className="contact-icon" /></a>
                        </p>
                    </div>
                    <p>Feel free to contact me about any business inquiries.</p>
                    <p>I am currently looking for remote work or anything in the San Francisco Bay Area and open to relocation. I would love to talk about any opportunities!</p>
                    <p>Please reach out, so we can talk about what I can do to improve your team!</p>
                </section>
                );
            default:
                return <section><h2>Welcome</h2></section>;
        }
    };

    return (
        <div className="container">
            <div className="top-section">
                <div className="top-section-content">
                    <h2>Lukas Daniel Licon</h2>
                    <p>Gameplay Programmer, Game Designer, Software Engineer</p>
                    <div className="resume-buttons">
                        <a className="resume-button" href="resumes/LukasLicon-Resume.pdf" target="_blank" rel="noopener noreferrer">WebDev Resume</a>
                        <a className="resume-button" href="resumes/LukasLicon-Resume.pdf" target="_blank" rel="noopener noreferrer">GameDev Resume</a>
                </div>
                    <div className="navbar">
                    <button onClick={() => setCurrentSection('about')}>About</button>
                    <button onClick={() => setCurrentSection('group projects')}>Group Projects</button>
                    <button onClick={() => setCurrentSection('individual projects')}>Individual Projects</button>
                    <button onClick={() => setCurrentSection('education')}>Education</button>
                    <button onClick={() => setCurrentSection('contact')}>Contact</button>
                </div>
                </div>
            </div>
            <div className="content">
                {renderSection()}
            </div>
            <div className="footer">
                <p>lukas@licons.com</p>
            </div>
        </div>
    );
};

createRoot(document.getElementById('root')).render(<App />);
