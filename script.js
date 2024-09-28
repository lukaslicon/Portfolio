const { useState } = React;
const { createRoot } = ReactDOM;

const App = () => {
  const [currentSection, setCurrentSection] = useState('about');
  const [fadeClass, setFadeClass] = useState('fade-in');

  const handleSectionChange = (section) => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentSection(section);
      setFadeClass('fade-in');
    }, 500); // Duration matches your CSS animation time
  };

  const sections = {
    about: (
        <section id="about" className={`content-box ${fadeClass}`}>
          <div className="about-header">
            <img src="assets/aboutmeimg.jpg" alt="Profile Image" className="about-image" />
            <h2>About Me</h2>
          </div>
          <div className="about-text">
          <p>
              Hello, I'm Lukas Licon, a passionate gameplay programmer and software engineer with an interest in C++ and Game AI. My fascination with technology and video games began at a young age, fueled by countless hours immersed in MMORPGs like World of Warcraft. This early passion evolved into a career ambition to create immersive and engaging game experiences that captivate players as I was once captivated.
            </p>
            <p>
              My academic journey has been a blend of rigorous coursework and hands-on projects, providing me with a robust foundation in programming and game development. Each project has been a pivotal step in honing my technical skills and nurturing my creative vision. Through my studies, I've developed a strong affinity for challenges; the more complex the task, the more it captivates me. I thrive on pushing my limits, which is why, after spending a couple of years developing games in Unity at UCSC, I'm now enthusiastically jumping back into Unreal Engine. For the past three months, I've dedicated myself to working with Unreal Engine daily, eager to explore its potential and use my knowledge within C++ making an ARPG/Souls-like game as an indie developer.
            </p>
            <p>
              Beyond my technical expertise, I find deep satisfaction in translating a designer's vision into engaging gameplay that resonates with users. My work is driven by the belief that the best games are those that seamlessly blend creative concepts with precise execution, creating experiences that are both captivating and fun. Collaborating with cross-functional teams has taught me the importance of clear communication and teamwork in bringing these visions to life. I am committed to staying at the forefront of industry trends and continuously refining my skills, as I am passionate about pushing the boundaries of what’s possible in game development. My goal is to craft experiences that not only entertain but also leave a lasting impact on players, ensuring that every project I work on contributes to the joy and engagement of its audience while I continue to grow and learn as a developer.
            </p>
          </div>
        </section>
      ),

    'group projects': (
      <section id="group-projects" className={`content-box ${fadeClass}`}>
        <h2>Group Projects</h2>

        {/* Project: Crabity */}
        <article className="project-item">
          <h3>Crabity</h3>
          <h5>
            <a href="https://store.steampowered.com/app/2988850/Crabity/">Link to Steam</a> |{' '}
            <a href="https://github.com/Team-Crabity/Crabity">Link to Github</a>
          </h5>
          <div className="project-content">
            <img src="assets/crabity screenshot.png" alt="Crabity Logo" />
            <div className="project-description">
              <h4>Project Description</h4>
              <p>
                Embark on a cosmic adventure as a duo of two robot crabs stranded in the vastness of space. See the world from a different angle and utilize the power of gravity to escape the space station and return back to Earth!
              </p>
              <h4>Contributions</h4>
              <p>
                Created daily generated maps using a weighted pathfinding algorithm to make corridors based on cell movement directions.
              </p>
              <p>Debugged gameplay mechanics & player movement.</p>
              <p>Implementation of UI scripts and pause menu scripting.</p>
            </div>
          </div>
        </article>

        {/* Project: Chromatic Conundrum */}
        <article className="project-item">
          <h3>Chromatic Conundrum</h3>
          <h5>
            <a href="https://ernaniraffo.itch.io/chromatic-tower-defense">Link to itch.io</a> |{' '}
            <a href="https://github.com/lukaslicon/UnityWizards">Link to Github</a>
          </h5>
          <div className="project-content">
            <img src="assets/chromaticImage.png" alt="Chromatic Conundrum" />
            <div className="project-description">
              <h4>Project Description</h4>
              <p>
                Chromatic Tower Defense is a strategy game where players defend their realm using the power of chromatic towers. Set in a vibrant and colorful world, players must build and upgrade towers, each using a unique color spectrum to defend the waves of monochromatic invaders. We offer an immersive experience for strategy game enthusiasts with stunning graphics and unique color-based gameplay mechanics.
              </p>
              <h4>Contributions</h4>
              <p>
                Using a node system, I implemented the AI enemy pathfinding and enemy wave spawning system.
              </p>
              <p>
                I also implemented the UI/UX for the pause menu and upgrade systems and built some of the upgrade systems and progression systems in C#.
              </p>
            </div>
          </div>
        </article>

        {/* Project: Procedural City Generation */}
        <article className="project-item">
          <h3>Procedural City Generation</h3>
          <h5>
            <a href="https://github.com/Procedural-BananaSlug-Studios/PCG-City-Generator">Link to Github</a>
          </h5>
          <div className="project-content">
            <img src="assets/proceduralcities.png" alt="Procedural City Generation" />
            <div className="project-description">
              <h4>Project Description</h4>
              <p>
                This project, developed for CMPM 146, is a procedural city generator utilizing Unity and C#. The generator creates dynamic city layouts, leveraging the Wave Function Collapse (WFC) algorithm to produce varied and coherent cityscapes with roads, buildings, and blocks that follow logical patterns while maintaining randomness.
              </p>
              <p>
                The PCG-City-Generator employs procedural generation techniques to generate cityscapes with randomized road networks, building placements, and city blocks. The project highlights advanced procedural content generation concepts using the Wave Function Collapse algorithm to ensure cities are varied yet cohesive.
              </p>
              <p>
                This project was developed to help game developers rapidly prototype mechanics in a random city environment based on their design constraints.
              </p>
              <h4>Contributions</h4>
              <p>
                I helped create the `WaveFunctionCollapse.cs` file, which propagates constraints across the city grid, selecting valid tiles based on their compatibility with adjacent tiles and then collapsing the cell at the given position.
              </p>
              <p>
                I also hooked up neighboring assets to properly align with our specific design constraints.
              </p>
            </div>
          </div>
        </article>
      </section>
    ),
/* Add this to your sections object in your script.js */

'individual projects': (
    <section id="individual-projects" className={`content-box ${fadeClass}`}>
      <h2>Individual Projects</h2>
  
      {/* Project: C++ Unreal Engine Souls-like Combat Project */}
      <article className="project-item">
        <h3>C++ Unreal Engine Souls-like Combat Project</h3>
        <h5>
          <a href="https://github.com/lukaslicon/UE5_Movement">Link to Github</a>
        </h5>
        <div className="project-content">
          <div className="project-media">
            <video width="385" height="250" controls>
              <source src="assets/Unreal Progress2.mp4" type="video/mp4" />
            </video>
            <video width="385" height="250" controls>
              <source src="assets/Unreal Progress.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="project-description">
            <p>
              All work is being done in C++ (staying away from blueprints as much as possible). Creating an ARPG-like arena game with souls-like combat to practice gameplay programming fast-paced melee combat systems.
            </p>
            <p>Practicing Spawners, AI pathfinding, loot system, upgrades, and more!</p>
            <p>
              Currently implementing the combat system with heavy and light attacks. Both speed sets are equal so that all spin attacks take the same time and all swing attacks take the same time. I am implementing damage and attack hit interfaces with debug tracing at the moment.
            </p>
            <p>
              I am also currently working on the AI for my enemy monster so he has smart fighting tactics that prioritize the offense while keeping in mind survival and counters. I am also adding in attacks that have root motion for both the player and enemies.
            </p>
          </div>
        </div>
      </article>
  
      {/* Project: C++ Client-Server Robot State Machine */}
      <article className="project-item">
        <h3>C++ Client-Server Robot State Machine</h3>
        <h5>
          <a href="https://github.com/lukaslicon/robotStateMachine">Link to Github</a>
        </h5>
        <div className="project-content">
          <div className="project-description">
            <p>
              This project explores writing an application that operates both as a client and a server, communicating over a TCP socket connection using serialized messages. The server receives messages, deserializes them, and implements a simple state machine to control the behavior of a robot.
            </p>
            <p>
              In this assignment, the robot server receives serialized messages from the client, processes them, and controls the state of a robot based on the received messages. The robot alternates between sleeping and moving states according to the messages it receives.
            </p>
          </div>
        </div>
      </article>
  
      {/* Project: C++ Matrix Operations Calculator for Sparse Matrices */}
      <article className="project-item">
        <h3>C++ Matrix Operations Calculator for Sparse Matrices</h3>
        <h5>
          <a href="https://github.com/lukaslicon/MatrixOperations">Link to Github</a>
        </h5>
        <div className="project-content">
          <div className="project-description">
            <p>
              The purpose of this project is to implement a calculator that performs matrix operations, optimized for sparse matrices. The program is designed to exploit the expected sparseness of matrix operands, making it more efficient in terms of memory usage and computational performance. The main functionality is built around a custom implementation of a List Abstract Data Type (ADT), which is used to manipulate matrix data and perform shuffling operations. The project includes both the implementation and testing of the List ADT, along with the core program that performs the matrix operations.
            </p>
          </div>
        </div>
      </article>


    {/* Project: C++ Fractal Tile Renderer */}
    <article className="project-item">
      <h3>C++ Fractal Tile Renderer</h3>
      <h5>
        <a href="https://github.com/lukaslicon/fractalTileMessage">Link to Github</a>
      </h5>
      <div className="project-content">
        <div className="project-description">
          <p>
            The Fractal Tiled Renderer generates a fractal image by dividing the image into tiles. Each tile is rendered asynchronously in parallel. Initially, `std::async` was used to manage parallel rendering of fractal tiles. However, this version refactors the program to utilize a thread-safe message queue with a fixed number of worker threads (e.g., 8 threads) for rendering the tiles. This project demonstrates concepts such as multithreading, thread-safe queues, and task distribution in C++.
          </p>
        </div>
      </div>
    </article>

    {/* Project: Python NavMesh Pathfinding */}
    <article className="project-item">
      <h3>Python NavMesh Pathfinding</h3>
      <h5>
        <a href="https://github.com/lukaslicon/CMPM146-P1">Link to Github</a>
      </h5>
      <div className="project-content">
        <div className="project-description">
          <p>
            This Python project implements a bidirectional A* search algorithm to find paths in navmeshes created from user-provided images. The program takes an image and its corresponding navmesh representation as input and outputs an image showing the path from a source to a destination point defined interactively. You can create your own test map by following the steps in the GitHub README file.
          </p>
        </div>
      </div>
    </article>

    {/* Project: Python Ultimate TicTacToe Bot */}
    <article className="project-item">
      <h3>Python Ultimate TicTacToe Bot</h3>
      <h5>
        <a href="https://github.com/CZarko/P2">Link to Github</a>
      </h5>
      <div className="project-content">
        <div className="project-description">
          <p>
            This project involves creating a bot that plays Ultimate Tic-Tac-Toe using Monte Carlo Tree Search (MCTS) in Python. Ultimate Tic-Tac-Toe is an advanced version of the classic game where players play on a grid of 9 smaller boards to complete a giant row, column, or diagonal. The MCTS bot is evaluated through various experiments to ensure its effectiveness.
          </p>
        </div>
      </div>
    </article>

    {/* Project: Python Planet Wars Bot */}
    <article className="project-item">
      <h3>Python Planet Wars Bot</h3>
      <h5>
        <a href="https://github.com/lukaslicon/P3-Behavior-Trees-for-Planet-Wars">Link to Github</a>
      </h5>
      <div className="project-content">
        <div className="project-description">
          <p>
            This project involves implementing a bot that plays Planet Wars using Behavior Trees in Python. Planet Wars is a real-time strategy game where the objective is to conquer a galaxy, planet by planet. Each planet produces ships per turn, which can be used to take over other planets from the enemy or neutral forces.
          </p>
        </div>
      </div>
    </article>

  </section>
),
  
    education: (
      <section id="education" className={`content-box ${fadeClass}`}>
        <h2>Education</h2>

        {/* Education Item: UCSC */}
        <div className="item-container">
          <img src="assets/ucsc logo.jpg" alt="UCSC Logo" className="item-logo" />
          <div className="item-description">
            <b>
              <p>University of California, Santa Cruz, Graduated 2024</p>
            </b>
            <p>
              The University of California, Santa Cruz (UCSC) offers one of the top-ranked game design programs in the world. The Computer Science: Computer Game Design B.S. program, established in 2006, was the first of its kind in the University of California system. This program is housed within the Baskin School of Engineering and is known for blending technical rigor with creative game design, making it a pioneer in game development education. UCSC's program was recently ranked in the top five best game/simulation development programs in the nation by U.S. News & World Report.
            </p>
            <p>
              The curriculum is highly interdisciplinary, with courses that cover core computer science principles, game design theory, and practical game development skills. Students engage in hands-on projects, working with cutting-edge tools and technologies while also exploring the societal impact of games. UCSC fosters innovation through its integration of research, experiential learning, and collaboration across disciplines like performance, play, and design.
            </p>
          </div>
        </div>

        {/* Education Item: College of Marin */}
        <div className="item-container">
          <img src="assets/COM-logo-color.png" alt="College of Marin Logo" className="item-logo" />
          <div className="item-description">
            <b>
              <p>College of Marin, 2019-2022, Associate Transfer in Computer Science</p>
            </b>
            <p>
              At the College of Marin, I earned an Associate of Science for Transfer (AS-T) in Computer Science. The program provided me with a solid foundation in both theoretical and applied aspects of computer science, with a focus on C++ programming. Through rigorous coursework, I developed a deep understanding of algorithms, data structures, and software development principles. Additionally, the curriculum included challenging mathematics courses such as calculus, linear algebra, and discrete mathematics. These courses equipped me with strong analytical and problem-solving skills, which have been essential in my academic and professional journey.
            </p>
          </div>
        </div>
      </section>
    ),
    work: (
      <section id="work" className={`content-box ${fadeClass}`}>
        <h2>Work Experience</h2>

        {/* Work Item: BluuKazi */}
        <div className="item-container">
          <img src="assets/bluukazilogo.png" alt="BluuKazi Logo" className="item-logo" />
          <div className="item-description">
            <b>
              <p>Application Developer - Internship (Remote)</p>
            </b>
            <p>Jul 2024 - Present</p>
            <p>
              Collaborated with a team to build a mobile app for Android. Utilized tools like Jira, GitLab, and Figma, and contributed to agile development, task prioritization, and performance optimization. Use of Kotlin and Android Studio.
            </p>
          </div>
        </div>

        {/* Work Item: Target */}
        <div className="item-container">
          <img src="assets/targetlogo.png" alt="Target Logo" className="item-logo" />
          <div className="item-description">
            <b>
              <p>Technical Consultant - Target (Novato, CA)</p>
            </b>
            <p>Sep 2021 - Jun 2022</p>
            <p>
              Utilized my product knowledge to help customers solve their issues or set up desired systems. Learned to troubleshoot broken or misused electronics, activate devices, help customers with timely and satisfactory repairs/services, and provide customers with technology-based information for sales.
            </p>
          </div>
        </div>
      </section>
    ),
    contact: (
        <section id="contact" className={`content-box ${fadeClass}`}>
          <h2>Contact</h2>
          <div className="contact-group">
            <a href="mailto:lukas@licons.com" className="button">
              <img src="assets/email.png" alt="Email Icon" className="contact-icon" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/lukas-licon/" className="button" target="_blank" rel="noopener noreferrer">
              <img src="assets/In-Blue.png" alt="LinkedIn Icon" className="contact-icon" />
              LinkedIn
            </a>
            <a href="https://github.com/lukaslicon" className="button" target="_blank" rel="noopener noreferrer">
              <img src="assets/github-mark.png" alt="GitHub Icon" className="contact-icon" />
              GitHub
            </a>
          </div>
          <h2>Please reach out, so we can talk about how I can fit into your team!</h2>
          <form action="https://formspree.io/f/xovapqqz" method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="_replyto" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="button submit-button">Send Message</button>
          </form>
        </section>
      ),
      
  };

  const navItems = ['about', 'group projects', 'individual projects', 'education', 'work', 'contact'];

  return (
    <>
      <header>
        <h1>Lukas Daniel Licon</h1>
        <p>Gameplay Programmer, Game Designer, Software Engineer</p>
        <h5>lukas@licons.com</h5>
        <a
            className="button resume-button no-scale"
            href="resumes/LukasLicon-ResumeGameFinal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >
            Resume
            </a>


        <nav className="navbar">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleSectionChange(item)}
              className={currentSection === item ? 'active' : ''}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
      </header>
      <main>{sections[currentSection]}</main>
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);
