const { useState, useEffect, useRef } = React;
const { createRoot } = ReactDOM;

/* ========== Data ========== */

const projects = [
  {
    title: 'Crabity',
    links: [
      { label: 'Steam', url: 'https://store.steampowered.com/app/2988850/Crabity/' },
      { label: 'Github', url: 'https://github.com/Team-Crabity/Crabity' },
    ],
    media: [{ type: 'image', src: 'assets/crabity screenshot.png', alt: 'Crabity' }],
    description: [
      { heading: 'Project Description', paragraphs: ['Embark on a cosmic adventure as a duo of two robot crabs stranded in the vastness of space. See the world from a different angle and utilize the power of gravity to escape the space station and return back to Earth!'] },
      { heading: 'Contributions', paragraphs: ['Created daily generated maps using a weighted pathfinding algorithm to make corridors based on cell movement directions.', 'Debugged gameplay mechanics & player movement.', 'Implementation of UI scripts and pause menu scripting.'] },
    ],
  },
  {
    title: 'Chromatic Conundrum',
    links: [
      { label: 'itch.io', url: 'https://ernaniraffo.itch.io/chromatic-tower-defense' },
      { label: 'Github', url: 'https://github.com/lukaslicon/UnityWizards' },
    ],
    media: [{ type: 'image', src: 'assets/chromaticImage.png', alt: 'Chromatic Conundrum' }],
    description: [
      { heading: 'Project Description', paragraphs: ['Chromatic Tower Defense is a strategy game where players defend their realm using the power of chromatic towers. Set in a vibrant and colorful world, players must build and upgrade towers, each using a unique color spectrum to defend the waves of monochromatic invaders. We offer an immersive experience for strategy game enthusiasts with stunning graphics and unique color-based gameplay mechanics.'] },
      { heading: 'Contributions', paragraphs: ['Using a node system, I implemented the AI enemy pathfinding and enemy wave spawning system.', 'I also implemented the UI/UX for the pause menu and upgrade systems and built some of the upgrade systems and progression systems in C#.'] },
    ],
  },
  {
    title: 'Procedural City Generation',
    links: [{ label: 'Github', url: 'https://github.com/Procedural-BananaSlug-Studios/PCG-City-Generator' }],
    media: [{ type: 'image', src: 'assets/proceduralcities.png', alt: 'Procedural City Generation' }],
    description: [
      { heading: 'Project Description', paragraphs: ['This project, developed for CMPM 146, is a procedural city generator utilizing Unity and C#. The generator creates dynamic city layouts, leveraging the Wave Function Collapse (WFC) algorithm to produce varied and coherent cityscapes with roads, buildings, and blocks that follow logical patterns while maintaining randomness.', 'The PCG-City-Generator employs procedural generation techniques to generate cityscapes with randomized road networks, building placements, and city blocks. The project highlights advanced procedural content generation concepts using the Wave Function Collapse algorithm to ensure cities are varied yet cohesive.', 'This project was developed to help game developers rapidly prototype mechanics in a random city environment based on their design constraints.'] },
      { heading: 'Contributions', paragraphs: ['I helped create the WaveFunctionCollapse.cs file, which propagates constraints across the city grid, selecting valid tiles based on their compatibility with adjacent tiles and then collapsing the cell at the given position.', 'I also hooked up neighboring assets to properly align with our specific design constraints.'] },
    ],
  },
  {
    title: 'Unity 3rd Person Shooter-Roguelike',
    links: [],
    media: [{ type: 'video', src: '' }],
    description: [{ paragraphs: ['Working on roguelike 3rd person in Unity which uses item upgrade system, resource management + wallet, persistent inventory systems, 3rd person shooting with aiming, animation IK, etc.'] }],
  },
  {
    title: 'C++ Unreal Engine Souls-like Combat Project',
    links: [{ label: 'Github', url: 'https://github.com/lukaslicon/UE5_Movement' }],
    media: [
      { type: 'video', src: 'assets/Unreal Progress2.mp4' },
      { type: 'video', src: 'assets/Unreal Progress.mp4' },
    ],
    description: [{ paragraphs: ['All work is done in C++ (staying away from blueprints as much as possible). Was creating an ARPG-like arena game with souls-like combat to practice gameplay programming fast-paced melee combat systems.', 'Practiced Spawners, AI pathfinding, loot system, upgrades, and more.'] }],
  },
  {
    title: 'C++ Client-Server Robot State Machine',
    links: [{ label: 'Github', url: 'https://github.com/lukaslicon/robotStateMachine' }],
    media: [],
    description: [{ paragraphs: ['This project explores writing an application that operates both as a client and a server, communicating over a TCP socket connection using serialized messages. The server receives messages, deserializes them, and implements a simple state machine to control the behavior of a robot.', 'In this assignment, the robot server receives serialized messages from the client, processes them, and controls the state of a robot based on the received messages. The robot alternates between sleeping and moving states according to the messages it receives.'] }],
  },
  {
    title: 'C++ Matrix Operations Calculator for Sparse Matrices',
    links: [{ label: 'Github', url: 'https://github.com/lukaslicon/MatrixOperations' }],
    media: [],
    description: [{ paragraphs: ['The purpose of this project is to implement a calculator that performs matrix operations, optimized for sparse matrices. The program is designed to exploit the expected sparseness of matrix operands, making it more efficient in terms of memory usage and computational performance. The main functionality is built around a custom implementation of a List Abstract Data Type (ADT), which is used to manipulate matrix data and perform shuffling operations. The project includes both the implementation and testing of the List ADT, along with the core program that performs the matrix operations.'] }],
  },
  {
    title: 'C++ Fractal Tile Renderer',
    links: [{ label: 'Github', url: 'https://github.com/lukaslicon/fractalTileMessage' }],
    media: [],
    description: [{ paragraphs: ['The Fractal Tiled Renderer generates a fractal image by dividing the image into tiles. Each tile is rendered asynchronously in parallel. Initially, std::async was used to manage parallel rendering of fractal tiles. However, this version refactors the program to utilize a thread-safe message queue with a fixed number of worker threads (e.g., 8 threads) for rendering the tiles. This project demonstrates concepts such as multithreading, thread-safe queues, and task distribution in C++.'] }],
  },
  {
    title: 'Python NavMesh Pathfinding',
    links: [{ label: 'Github', url: 'https://github.com/lukaslicon/CMPM146-P1' }],
    media: [],
    description: [{ paragraphs: ['This Python project implements a bidirectional A* search algorithm to find paths in navmeshes created from user-provided images. The program takes an image and its corresponding navmesh representation as input and outputs an image showing the path from a source to a destination point defined interactively. You can create your own test map by following the steps in the GitHub README file.'] }],
  },
  {
    title: 'Python Ultimate TicTacToe Bot',
    links: [{ label: 'Github', url: 'https://github.com/CZarko/P2' }],
    media: [],
    description: [{ paragraphs: ['This project involves creating a bot that plays Ultimate Tic-Tac-Toe using Monte Carlo Tree Search (MCTS) in Python. Ultimate Tic-Tac-Toe is an advanced version of the classic game where players play on a grid of 9 smaller boards to complete a giant row, column, or diagonal. The MCTS bot is evaluated through various experiments to ensure its effectiveness.'] }],
  },
  {
    title: 'Python Planet Wars Bot',
    links: [{ label: 'Github', url: 'https://github.com/lukaslicon/P3-Behavior-Trees-for-Planet-Wars' }],
    media: [],
    description: [{ paragraphs: ['This project involves implementing a bot that plays Planet Wars using Behavior Trees in Python. Planet Wars is a real-time strategy game where the objective is to conquer a galaxy, planet by planet. Each planet produces ships per turn, which can be used to take over other planets from the enemy or neutral forces.'] }],
  },
];

const workItems = [
  { title: 'Founding Engineer', company: 'Glade', dates: 'Oct 2025 - Present', logo: 'assets/gladestudio_logo.jpg', summary: 'GladeCore plugin for Unity/Unreal—local AI inference (STT, TTS, LLM) for dynamic NPC conversations. Lead engineering decisions.', tech: 'C++, C#, Unreal Engine 5, Unity' },
  { title: 'AI Engineer', company: 'Glade', dates: 'Oct 2024 - Oct 2025', logo: 'assets/gladestudio_logo.jpg', summary: 'GladeCore plugin: local AI inference framework for immersive generative experiences and unscripted NPC dialogue.', tech: 'C++, C#, Unreal Engine 5, Unity' },
  { title: 'Application Developer (Internship)', company: 'BluuKazi', dates: 'Jul 2024 - Oct 2024', logo: 'assets/bluukazilogo.png', summary: 'Android mobile app; Jira, GitLab, Figma; agile, performance optimization.', tech: 'Kotlin, Android Studio' },
  { title: 'Technical Consultant', company: 'Target', dates: 'Sep 2021 - Jun 2022', logo: 'assets/targetlogo.png', summary: 'Product support, troubleshooting, device setup and repairs, technology sales.', tech: '' },
];

const educationItems = [
  { name: 'University of California, Santa Cruz', degree: 'B.S. Computer Science: Computer Game Design', year: '2024', logo: 'assets/ucsc logo.jpg', summary: 'Top-ranked game design program; interdisciplinary CS, game design, and hands-on development.' },
  { name: 'College of Marin', degree: 'AS-T Computer Science', year: '2019–2022', logo: 'assets/COM-logo-color.png', summary: 'Foundation in C++, algorithms, data structures; calculus, linear algebra, discrete math.' },
];

/* ========== Components ========== */

const ProjectCard = ({ project, index }) => (
  <article className="project-item section-reveal card-glow-border" data-index={index}>
    <h3>{project.title}</h3>
    {project.links.length > 0 && (
      <h5>
        {project.links.map((link, i) => (
          <span key={link.url}>
            {i > 0 && ' | '}
            <a href={link.url} target="_blank" rel="noopener noreferrer">Link to {link.label}</a>
          </span>
        ))}
      </h5>
    )}
    <div className="project-content">
      {project.media.filter(m => m.src).length > 0 && (
        <div className="project-media">
          {project.media.filter(m => m.src).map((m, i) =>
            m.type === 'image' ? (
              <img key={i} src={m.src} alt={m.alt || project.title} />
            ) : (
              <video key={i} width="385" height="250" controls>
                <source src={m.src} type="video/mp4" />
              </video>
            )
          )}
        </div>
      )}
      <div className="project-description">
        {project.description.map((block, i) => (
          <div key={i}>
            {block.heading && <h4>{block.heading}</h4>}
            {block.paragraphs.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  </article>
);

/* ========== App ========== */

const SECTION_IDS = ['about', 'projects', 'work', 'education'];
const navItems = SECTION_IDS.map(id => ({ id, label: id.charAt(0).toUpperCase() + id.slice(1) }));

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const mainRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setNavOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in-view');
        });
      },
      { rootMargin: '-40px 0px -40px 0px', threshold: 0 }
    );
    document.querySelectorAll('.section-reveal').forEach((el) => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a href="#about" className="header-logo" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Lukas Licon</a>
        <nav id="nav-menu" className={`navbar ${navOpen ? 'navbar-open' : ''}`} aria-hidden={!navOpen}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a className="nav-resume button button-shimmer" href="resumes/AIEngineer-Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setNavOpen(false)}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <a href="mailto:lukas@licons.com" className="header-contact">Contact me: lukas@licons.com</a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-controls="nav-menu"
            aria-label="Toggle menu"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      <main ref={mainRef}>
        <section id="about" className="content-box section-reveal in-view">
          <div className="about-header">
            <img src="assets/profilepic.jpg" alt="Lukas Licon" className="about-image" />
            <div className="about-title-block">
              <h1 className="hero-title-gradient hero-glow">Lukas Daniel Licon</h1>
              <p className="about-tagline">AI Engineer · Gameplay Programmer</p>
            </div>
          </div>
          <div className="about-text">
            <p>I'm a gameplay programmer and software engineer focused on C++, Unreal Engine, and AI-driven systems. My path started with a deep love for games and technology—from MMORPGs to building the systems that power them.</p>
            <p>I combine rigorous programming with hands-on development: complex systems, Unreal Engine, and C++ are where I thrive. I also specialize in AI inference and runtime integration—training models and LoRAs, dataset and emotion research, and applying speech-to-text, text-to-text, and text-to-speech in games so NPCs can respond with personality and nuance on-device, without cloud APIs.</p>
            <p>I'm driven to make advanced AI practical and impactful in real time—whether that's responsive NPCs, runtime inference pipelines, or evaluation and integration. I'm eager to work with teams that want to push what's possible in dynamic, intelligent experiences.</p>
          </div>
        </section>

        <section id="projects" className="content-box">
          <h2>Projects</h2>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </section>

        <section id="work" className="content-box">
          <h2>Work Experience</h2>
          <div className="work-grid">
            {workItems.map((item, i) => (
              <div key={i} className="item-container section-reveal card-glow-border" data-index={i}>
                <img src={item.logo} alt={item.company} className="item-logo" />
                <div className="item-description">
                  <b><p className="item-title">{item.title}</p></b>
                  <p className="item-meta">{item.company} · {item.dates}</p>
                  <p>{item.summary}</p>
                  {item.tech && <p><b>Tech:</b> {item.tech}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="content-box">
          <h2>Education</h2>
          <div className="education-grid">
            {educationItems.map((item, i) => (
              <div key={i} className="item-container section-reveal card-glow-border" data-index={i}>
                <img src={item.logo} alt={item.name} className="item-logo" />
                <div className="item-description">
                  <b><p className="item-title">{item.name}</p></b>
                  <p className="item-meta">{item.degree} · {item.year}</p>
                  <p>{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <p>Contact me: <a href="mailto:lukas@licons.com">lukas@licons.com</a></p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/lukas-licon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/lukaslicon" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </footer>
      </main>
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);
