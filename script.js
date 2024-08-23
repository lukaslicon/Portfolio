const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

const App = () => {
    const [currentSection, setCurrentSection] = useState('about');
    const [fadeClass, setFadeClass] = useState('fade-in');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleSectionChange = (section) => {
        setIsTransitioning(true); // Start the transition
        setFadeClass('fade-out'); // Trigger fade-out animation for the current section
        setTimeout(() => {
            setCurrentSection(section);
            setFadeClass('fade-in'); // Trigger fade-in animation for the new section
            setIsTransitioning(false); // End the transition
        }, 500); // Match the duration of the fade-out animation
    };

    const renderSection = () => {
        switch (currentSection) {
            case 'about':
                return (

                    <section id="home" className={`content-box ${fadeClass}`}>
                        <div className="about-container">
                            <div className="about-text">
                                <p>Hello, I'm Lukas Licon, a passionate software engineer and gameplay programmer with a Bachelor's degree in Computer Science: Computer Game Design from UC Santa Cruz. My fascination with technology and video games began at a young age, fueled by countless hours immersed in MMORPGs like World of Warcraft. This early passion evolved into a career ambition to create immersive and engaging game experiences that captivate players as I was once captivated.</p>
                                <p>My academic journey has been a blend of rigorous coursework and hands-on projects that have equipped me with a solid foundation in programming and game development. Each project has been a step forward in my journey, shaping my technical abilities and creative vision.</p>
                                <p>Beyond my technical skills, I am driven by a collaborative spirit and a desire to continuously learn and grow. Working with cross-functional teams has taught me the importance of communication and teamwork in achieving project goals. I am committed to staying updated with the latest industry trends and technologies, always seeking new knowledge to enhance my craft. My goal is to use my skills and experiences to create innovative solutions that entertain, educate, and empower users, contributing to a future where technology and creativity intersect to make a positive impact.</p>
                                <p>My main and current interest are within Game AI, Hyper-realistic combat systems, rendering machines such as Vulkan and OpenGL, and developing core gameplay loops.</p>
                            </div>
                            <div className="about-image">
                                <img src="assets/aboutmeimg.jpg" alt="Profile Image" className="about-image" />
                            </div>
                        </div>
                    </section>
                );
            case 'group projects':
                return (
                    <section id="group projects" className={`content-box Gprojects ${fadeClass}`}>
                        <h3>Crabity</h3>
                        <h5><a href="https://store.steampowered.com/app/2988850/Crabity/"> Link to Steam</a><a href="https://github.com/Team-Crabity/Crabity"> Link to Github</a></h5>
                        <div className="gprojects-item">
                            <div className="gprojects-logo">
                                <img src="assets/crabity screenshot.png" alt="Crabity Logo" className="gprojects-logo-img" />
                                <div className="gprojects-video">
                                    <video width="385 " height="250" controls>
                                        <source src="assets/crabityvideo.webm" type="video/webm"></source>
                                    </video>
                                </div>
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
                                    <p>Created daily generated maps using a weighted pathfinding algorithm to make corridors based on cell movement directions. Debugged gameplay mechanics & player movement. Implemetation of UI scripts and pause menu scripting.</p>
                                </div>
                            </div>
                        </div>
                        <h3>Chromatic Conundrum</h3>
                        <h5><a href="https://ernaniraffo.itch.io/chromatic-tower-defense"> Link to itch.io</a>
                        <a href="https://github.com/lukaslicon/UnityWizards">Link to Github</a></h5>
                        <div className="gprojects-item">
                            <div className="gprojects-logo">
                                <img src="assets/chromaticImage.png" alt="Chromatic" className="gprojects-logo-img" />
                                <div className="gprojects-video">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yME5TMrvPHk?si=8tAGNE3sytgwzEXw"
                                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>                            
                            </div>
                            <div className="gprojects-box">
                                <div className="gprojects-title">
                                    <h4>Project Description</h4>
                                </div>
                                <div className="gprojects-description">
                                    <p>Chromatic Tower Defense is a strategy game where players defend their realm using the power of chromatic towers. Set in a vibrant and colorful world, players must build and upgrade towers, each using a unique color spectrum to defend the waves of monochromatic invaders. We offer an immersive experience for strategy game enthusiasts with stunning graphics and unique color-based gameplay mechanics.</p>
                                </div>
                            </div>
                            <div className="gprojects-box">
                                <div className="gprojects-title">
                                    <h4>Contributions</h4>
                                </div>
                                <div className="gprojects-contributions">
                                    <p>I implemented the AI enemy pathfinding, UI/UX implementation, system interactions, and enemy spawning and wave system.</p>
                                </div>
                            </div>
                        </div>



                        <h3>Procedural City Generation</h3>
                        <h5><a href="https://github.com/Procedural-BananaSlug-Studios/PCG-City-Generator"> Link to Github</a></h5>
                        <div className="gprojects-item">
                            <div className="gprojects-logo">
                                <img src="assets/proceduralcities.png" alt="ProcGen City" className="gprojects-logo-img" />
                                <div className="gprojects-video">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fOahTODNQ7k?si=x1SzxIPayuseSUVM" 
                                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>           
                            </div>
                            <div className="gprojects-box">
                                <div className="gprojects-title">
                                    <h4>Project Description</h4>
                                </div>
                                <div className="gprojects-description">
                                    <p>This project, developed for CMPM 146, is a procedural city generator utilizing Unity and C#. The generator creates dynamic city layouts, leveraging the Wave Function Collapse (WFC) algorithm to produce varied and coherent cityscapes with roads, buildings, and blocks that follow logical patterns while maintaining randomness.</p>
                                    <p>The PCG-City-Generator employs procedural generation techniques to generate cityscapes with randomized road networks, building placements, and city blocks. The project highlights advanced procedural content generation concepts using the Wave Function Collapse algorithm to ensure cities are varied yet cohesive.</p> 
                                    <p>This project was developed to help game developers rapidly prototype mechanics in a random city environment based on their design constraints.</p>
                                </div>
                            </div>
                            <div className="gprojects-box">
                                <div className="gprojects-title">
                                    <h4>Contributions</h4>
                                </div>
                                <div className="gprojects-contributions">
                                    <p>I hooked up neighboring assets to properly allign with the design contraints. I also helped create the WaveFunctionCollapse.cs file which propagates constraints across the city grid, selecting valid tiles based on their compatibility with adjacent tiles.</p>

                                </div>
                            </div>
                        </div>

                    </section>
                );
            case 'individual projects':
                return (
                    <section id="individual projects" className={`content-box Iprojects ${fadeClass}`}>
                        <h3>C++ Unreal Engine Souls-like combat project.</h3>
                        <h5><a href="https://github.com/lukaslicon/robotStateMachine"> Link to Github</a></h5>
                        <div className="iprojects-item">
                            <div className="iprojects-description">
                                <p>Creating a ARPG like arena game with souls-like combat to practice gameplay programming fast paced melee combat systems. </p>
                                <p>Practing Spawners, AI pathfinding, loot system, upgrades, and more!</p>
                            </div>
                            <div className="iprojects-logo">
                                <img src="assets/imagesoon.png" alt="NavMesh Pathfinding" className="iprojects-logo-img" />
                            </div>
                        </div>


                        <h3>C++ Client-Server Robot State Machine</h3>
                        <h5><a href="https://github.com/lukaslicon/robotStateMachine"> Link to Github</a></h5>
                        <div className="iprojects-item">
                            <div className="iprojects-description">
                            <p>This project explores writing an application that operates both as a client and a server, communicating over a TCP socket connection using serialized messages. The server receives messages, deserializes them, and implements a simple state machine to control the behavior of a robot.</p>
                            <p>In this assignment, the robot server receives serialized messages from the client, processes them, and controls the state of a robot based on the received messages. The robot alternates between sleeping and moving states according to the messages it receives.</p>
                            </div>
                        </div>

                        <h3>C++ Matrix operations calculator for sparse matrices</h3>
                        <h5><a href="https://github.com/lukaslicon/MatrixOperations"> Link to Github</a></h5>
                        <div className="iprojects-item">
                            <div className="iprojects-description">
                                <p>The purpose of this project is to implement a calculator that performs matrix operations, optimized for sparse matrices. The program is designed to exploit the expected sparseness of matrix operands, making it more efficient in terms of memory usage and computational performance. The main functionality is built around a custom implementation of a List Abstract Data Type (ADT), which is used to manipulate matrix data and perform shuffling operations. The project includes both the implementation and testing of the List ADT, along with the core program that performs the matrix operations.</p>
                            </div>
                        </div>

                        <h3>C++ Fractal Tile Renderer</h3>
                        <h5><a href="https://github.com/lukaslicon/fractalTileMessage"> Link to Github</a></h5>
                        <div className="iprojects-item">
                            <div className="iprojects-description">
                                <p>The Fractal Tiled Renderer generates a fractal image by dividing the image into tiles. Each tile is rendered asynchronously in parallel. Initially, std::async was used to manage parallel rendering of fractal tiles. However, this version refactors the program to utilize a thread-safe message queue with a fixed number of worker threads (e.g., 8 threads) for rendering the tiles. This project is intended to demonstrate concepts such as multithreading, thread-safe queues, and task distribution in C++.</p>
                            </div>
                        </div>
                        

                        <h3>Python NavMesh Pathfinding</h3>
                        <h5><a href="https://github.com/lukaslicon/CMPM146-P1"> Link to Github</a></h5>
                        <div className="iprojects-item">
                            <div className="iprojects-description">
                                <p>This Python project implements a bidirectional A* search algorithm to find paths in navmeshes created from user-provided images. The program takes an image and its corresponding navmesh representation as input and outputs an image showing the path from a source to a destination point defined interactively. You can create your own test map by following the steps in the Github Readme file. </p>
                            </div>
                        </div>


                        <h3>Python Ultimate TicTacToe Bot</h3>
                        <h5><a href="https://github.com/CZarko/P2"> Link to Github</a></h5>
                        <div className="iprojects-item">
                            <div className="iprojects-description">
                                <p>This project involves creating a bot that plays Ultimate Tic-Tac-Toe using Monte Carlo Tree Search (MCTS) in Python. Ultimate Tic-Tac-Toe is an advanced version of the classic Tic-Tac-Toe game where players play on a grid of 9 smaller Tic-Tac-Toe boards to complete a giant row, column, or diagonal. The MCTS bot will be evaluated through various experiments to ensure its effectiveness and performance.</p>
                            </div>
                        </div>


                        <h3>Python Planet Wars Bot</h3>
                        <h5><a href="https://github.com/lukaslicon/P3-Behavior-Trees-for-Planet-Wars"> Link to Github</a></h5>
                        <div className="iprojects-item">
                            <div className="iprojects-description">
                                <p>This project involves implementing a bot that plays Planet Wars using Behavior Trees in Python. Planet Wars is a real-time strategy game where the objective is to conquer a galaxy, planet by planet. Each planet produces ships per turn, which can be used to take over other planets from the enemy or neutral forces.</p>
                            </div>
                        </div>
                    </section>
                );
            case 'education':
                return (
                    <section id="education" className={`content-box education ${fadeClass}`}>
                        <div className="education-item">
                            <div className="education-logo">
                                <img src="assets/ucsc logo.jpg" alt="School Logo" className="education-logo-img" />
                            </div>
                            <div className="education-description">
                                <b><p>University of California, Santa Cruz, Graduated 2024</p></b>
                                <p>The University of California, Santa Cruz (UCSC) offers one of the top-ranked game design programs in the world. The Computer Science: Computer Game Design B.S. program, established in 2006, was the first of its kind in the University of California system. This program is housed within the Baskin School of Engineering and is known for blending technical rigor with creative game design, making it a pioneer in game development education. UCSC's program was recently ranked in the top five best game/simulation development programs in the nation by U.S. News & World Report​.</p>
                                <p>The curriculum is highly interdisciplinary, with courses that cover core computer science principles, game design theory, and practical game development skills. Students engage in hands-on projects, working with cutting-edge tools and technologies while also exploring the societal impact of games. UCSC fosters innovation through its integration of research, experiential learning, and collaboration across disciplines like performance, play, and design.</p>
                            </div>
                        </div>
                        <div className="education-item">
                            <div className="education-logo">
                                <img src="assets/COM-logo-color.png" alt="School Logo" className="education-logo-img" />
                            </div>
                            <div className="education-description">
                                <b><p>College of Marin, 2019-2022, Associates Transfer in Computer Science</p></b>
                                <p>At the College of Marin, I earned an Associate of Science for Transfer (AS-T) in Computer Science. The program provided me with a solid foundation in both theoretical and applied aspects of computer science, with a focus on C++ programming. Through rigorous coursework, I developed a deep understanding of algorithms, data structures, and software development principles. Additionally, the curriculum included challenging mathematics courses such as calculus, linear algebra, and discrete mathematics. These courses equipped me with strong analytical and problem-solving skills, which have been essential in my academic and professional journey.</p>
                            </div>
                        </div>
                    </section>
                );
            case 'contact':
                return (
                    <section id="contact" className={`content-box contact ${fadeClass}`}>
                        <div className="contact-group">
                            <a href="mailto:lukas@licons.com"><img src="assets/email.png" alt="Email" className="contact-icon" /></a>
                            <a href="https://www.linkedin.com/in/lukas-licon/"><img src="assets/In-Blue.png" alt="LinkedIn" className="contact-icon" /></a>
                            <a href="https://github.com/lukaslicon"><img src="assets/github-mark.png" alt="Github" className="contact-icon" /></a>
                        </div>
                        <h2><p>Please reach out, so we can talk about how I can fit into your team!</p></h2>

                        <form action="https://formspree.io/f/xovapqqz" method="POST" className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </section>
                );


                case 'Work':
                    return (
                        <section id="Work" className={`content-box contact ${fadeClass}`}>
                        <div className="work-item">
                            <div className="work-logo">
                                <img src="assets/bluukazilogo.png" alt="BluuKaziLogo" className="work-logo-img" />
                            </div>
                            <div className="work-description">
                                <b><p>Application Developer - Internship (Remote)</p></b>
                                <p>Jul 2024 - Present</p>
                                <p>Collaborated with a team to build a mobile app for Android. Utilized tools like Jira, Gitlab, & Figma, & contributed to
                                agile development, task prioritization, & performance optimization. Use of Kotlin & Android Studio.</p>
                            </div>
                        </div>
                        
                        <div className="work-item">
                            <div className="work-logo">
                                <img src="assets/targetlogo.png" alt="Target Logo" className="target-logo" />
                            </div>
                            <div className="work-description">
                                <b><p>Technical Consultant - Target (Novato, CA)</p></b>
                                <p>Sep 2021 - Jun 2022</p>
                                <p>Utilize my product knowledge to help customers solve their issues or set up desired systems. Learned to troubleshoot broken or misused electronics, activate devices, help customers with timely and satisfactory repairs/services, and provide customers with technology based information for sales.</p>
                            </div>
                        </div>
                    </section>
                    );
            default:
                return <section><h2>Page Not Found. Error 404.</h2></section>;
        }
    };

    return (
        <div className="container">
            <div className="top-section">
                <div className="top-section-content">
                    <h2>Lukas Daniel Licon</h2>
                    <p>Gameplay Programmer, Game Designer, Software Engineer</p>
                    <div className="resume-buttons">
                        <a className="resume-button" href="resumes/LukasLicon-ResumeEAFinal.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                    <div className="navbar">
                        <button 
                            onClick={() => handleSectionChange('about')} 
                            className={currentSection === 'about' ? 'active' : ''}
                        >
                            About
                        </button>
                        <button 
                            onClick={() => handleSectionChange('group projects')} 
                            className={currentSection === 'group projects' ? 'active' : ''}
                        >
                            Group Projects
                        </button>
                        <button 
                            onClick={() => handleSectionChange('individual projects')} 
                            className={currentSection === 'individual projects' ? 'active' : ''}
                        >
                            Individual Projects
                        </button>
                        <button 
                            onClick={() => handleSectionChange('education')} 
                            className={currentSection === 'education' ? 'active' : ''}
                        >
                            Education
                        </button>

                        <button 
                            onClick={() => handleSectionChange('Work')} 
                            className={currentSection === 'Work' ? 'active' : ''}
                        >
                            Work
                        </button>
                        <button 
                            onClick={() => handleSectionChange('contact')} 
                            className={currentSection === 'contact' ? 'active' : ''}
                        >
                            Contact
                        </button>
                    </div>

                </div>
            </div>
            <div className="content">
                {isTransitioning && renderSection(currentSection)}
                {!isTransitioning && renderSection(currentSection)}
            </div>
            <div className="footer">
                <p>lukas@licons.com</p>
            </div>
        </div>
    );
};

createRoot(document.getElementById('root')).render(<App />);
