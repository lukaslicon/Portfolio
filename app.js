"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
const _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
const _ReactDOM = ReactDOM,
  createRoot = _ReactDOM.createRoot;

/* ========== Data ========== */

const projects = [{
  title: 'Crabity',
  links: [{
    label: 'Steam',
    url: 'https://store.steampowered.com/app/2988850/Crabity/'
  }, {
    label: 'Github',
    url: 'https://github.com/Team-Crabity/Crabity'
  }],
  media: [{
    type: 'image',
    src: 'assets/crabity screenshot.png',
    alt: 'Crabity'
  }],
  description: [{
    heading: 'Project Description',
    paragraphs: ['Embark on a cosmic adventure as a duo of two robot crabs stranded in the vastness of space. See the world from a different angle and utilize the power of gravity to escape the space station and return back to Earth!']
  }, {
    heading: 'Contributions',
    paragraphs: ['Created daily generated maps using a weighted pathfinding algorithm to make corridors based on cell movement directions.', 'Debugged gameplay mechanics & player movement.', 'Implementation of UI scripts and pause menu scripting.']
  }]
}, {
  title: 'Chromatic Conundrum',
  links: [{
    label: 'itch.io',
    url: 'https://ernaniraffo.itch.io/chromatic-tower-defense'
  }, {
    label: 'Github',
    url: 'https://github.com/lukaslicon/UnityWizards'
  }],
  media: [{
    type: 'image',
    src: 'assets/chromaticImage.png',
    alt: 'Chromatic Conundrum'
  }],
  description: [{
    heading: 'Project Description',
    paragraphs: ['Chromatic Tower Defense is a strategy game where players defend their realm using the power of chromatic towers. Set in a vibrant and colorful world, players must build and upgrade towers, each using a unique color spectrum to defend the waves of monochromatic invaders. We offer an immersive experience for strategy game enthusiasts with stunning graphics and unique color-based gameplay mechanics.']
  }, {
    heading: 'Contributions',
    paragraphs: ['Using a node system, I implemented the AI enemy pathfinding and enemy wave spawning system.', 'I also implemented the UI/UX for the pause menu and upgrade systems and built some of the upgrade systems and progression systems in C#.']
  }]
}, {
  title: 'Procedural City Generation',
  links: [{
    label: 'Github',
    url: 'https://github.com/Procedural-BananaSlug-Studios/PCG-City-Generator'
  }],
  media: [{
    type: 'image',
    src: 'assets/proceduralcities.png',
    alt: 'Procedural City Generation'
  }],
  description: [{
    heading: 'Project Description',
    paragraphs: ['This project, developed for CMPM 146, is a procedural city generator utilizing Unity and C#. The generator creates dynamic city layouts, leveraging the Wave Function Collapse (WFC) algorithm to produce varied and coherent cityscapes with roads, buildings, and blocks that follow logical patterns while maintaining randomness.', 'The PCG-City-Generator employs procedural generation techniques to generate cityscapes with randomized road networks, building placements, and city blocks. The project highlights advanced procedural content generation concepts using the Wave Function Collapse algorithm to ensure cities are varied yet cohesive.', 'This project was developed to help game developers rapidly prototype mechanics in a random city environment based on their design constraints.']
  }, {
    heading: 'Contributions',
    paragraphs: ['I helped create the WaveFunctionCollapse.cs file, which propagates constraints across the city grid, selecting valid tiles based on their compatibility with adjacent tiles and then collapsing the cell at the given position.', 'I also hooked up neighboring assets to properly align with our specific design constraints.']
  }]
}, {
  title: 'Unity 3rd Person Shooter-Roguelike',
  links: [],
  media: [{
    type: 'video',
    src: ''
  }],
  description: [{
    paragraphs: ['Working on roguelike 3rd person in Unity which uses item upgrade system, resource management + wallet, persistent inventory systems, 3rd person shooting with aiming, animation IK, etc.']
  }]
}, {
  title: 'C++ Unreal Engine Souls-like Combat Project',
  links: [{
    label: 'Github',
    url: 'https://github.com/lukaslicon/UE5_Movement'
  }],
  media: [{
    type: 'video',
    src: 'assets/Unreal Progress2.mp4'
  }, {
    type: 'video',
    src: 'assets/Unreal Progress.mp4'
  }],
  description: [{
    paragraphs: ['All work is done in C++ (staying away from blueprints as much as possible). Was creating an ARPG-like arena game with souls-like combat to practice gameplay programming fast-paced melee combat systems.', 'Practiced Spawners, AI pathfinding, loot system, upgrades, and more.']
  }]
}, {
  title: 'C++ Client-Server Robot State Machine',
  links: [{
    label: 'Github',
    url: 'https://github.com/lukaslicon/robotStateMachine'
  }],
  media: [],
  description: [{
    paragraphs: ['This project explores writing an application that operates both as a client and a server, communicating over a TCP socket connection using serialized messages. The server receives messages, deserializes them, and implements a simple state machine to control the behavior of a robot.', 'In this assignment, the robot server receives serialized messages from the client, processes them, and controls the state of a robot based on the received messages. The robot alternates between sleeping and moving states according to the messages it receives.']
  }]
}, {
  title: 'C++ Matrix Operations Calculator for Sparse Matrices',
  links: [{
    label: 'Github',
    url: 'https://github.com/lukaslicon/MatrixOperations'
  }],
  media: [],
  description: [{
    paragraphs: ['The purpose of this project is to implement a calculator that performs matrix operations, optimized for sparse matrices. The program is designed to exploit the expected sparseness of matrix operands, making it more efficient in terms of memory usage and computational performance. The main functionality is built around a custom implementation of a List Abstract Data Type (ADT), which is used to manipulate matrix data and perform shuffling operations. The project includes both the implementation and testing of the List ADT, along with the core program that performs the matrix operations.']
  }]
}, {
  title: 'C++ Fractal Tile Renderer',
  links: [{
    label: 'Github',
    url: 'https://github.com/lukaslicon/fractalTileMessage'
  }],
  media: [],
  description: [{
    paragraphs: ['The Fractal Tiled Renderer generates a fractal image by dividing the image into tiles. Each tile is rendered asynchronously in parallel. Initially, std::async was used to manage parallel rendering of fractal tiles. However, this version refactors the program to utilize a thread-safe message queue with a fixed number of worker threads (e.g., 8 threads) for rendering the tiles. This project demonstrates concepts such as multithreading, thread-safe queues, and task distribution in C++.']
  }]
}, {
  title: 'Python NavMesh Pathfinding',
  links: [{
    label: 'Github',
    url: 'https://github.com/lukaslicon/CMPM146-P1'
  }],
  media: [],
  description: [{
    paragraphs: ['This Python project implements a bidirectional A* search algorithm to find paths in navmeshes created from user-provided images. The program takes an image and its corresponding navmesh representation as input and outputs an image showing the path from a source to a destination point defined interactively. You can create your own test map by following the steps in the GitHub README file.']
  }]
}, {
  title: 'Python Ultimate TicTacToe Bot',
  links: [{
    label: 'Github',
    url: 'https://github.com/CZarko/P2'
  }],
  media: [],
  description: [{
    paragraphs: ['This project involves creating a bot that plays Ultimate Tic-Tac-Toe using Monte Carlo Tree Search (MCTS) in Python. Ultimate Tic-Tac-Toe is an advanced version of the classic game where players play on a grid of 9 smaller boards to complete a giant row, column, or diagonal. The MCTS bot is evaluated through various experiments to ensure its effectiveness.']
  }]
}, {
  title: 'Python Planet Wars Bot',
  links: [{
    label: 'Github',
    url: 'https://github.com/lukaslicon/P3-Behavior-Trees-for-Planet-Wars'
  }],
  media: [],
  description: [{
    paragraphs: ['This project involves implementing a bot that plays Planet Wars using Behavior Trees in Python. Planet Wars is a real-time strategy game where the objective is to conquer a galaxy, planet by planet. Each planet produces ships per turn, which can be used to take over other planets from the enemy or neutral forces.']
  }]
}];
const workItems = [{
  title: 'Founding Engineer',
  company: 'Glade',
  dates: 'Oct 2025 - Present',
  logo: 'assets/gladestudio_logo.jpg',
  summary: 'GladeCore plugin for Unity/Unreal—local AI inference (STT, TTS, LLM) for dynamic NPC conversations. Lead engineering decisions.',
  tech: 'C++, C#, Unreal Engine 5, Unity'
}, {
  title: 'AI Engineer',
  company: 'Glade',
  dates: 'Oct 2024 - Oct 2025',
  logo: 'assets/gladestudio_logo.jpg',
  summary: 'GladeCore plugin: local AI inference framework for immersive generative experiences and unscripted NPC dialogue.',
  tech: 'C++, C#, Unreal Engine 5, Unity'
}, {
  title: 'Application Developer (Internship)',
  company: 'BluuKazi',
  dates: 'Jul 2024 - Oct 2024',
  logo: 'assets/bluukazilogo.png',
  summary: 'Android mobile app; Jira, GitLab, Figma; agile, performance optimization.',
  tech: 'Kotlin, Android Studio'
}, {
  title: 'Technical Consultant',
  company: 'Target',
  dates: 'Sep 2021 - Jun 2022',
  logo: 'assets/targetlogo.png',
  summary: 'Product support, troubleshooting, device setup and repairs, technology sales.',
  tech: ''
}];
const educationItems = [{
  name: 'University of California, Santa Cruz',
  degree: 'B.S. Computer Science: Computer Game Design',
  year: '2024',
  logo: 'assets/ucsc logo.jpg',
  summary: 'Top-ranked game design program; interdisciplinary CS, game design, and hands-on development.'
}, {
  name: 'College of Marin',
  degree: 'AS-T Computer Science',
  year: '2019–2022',
  logo: 'assets/COM-logo-color.png',
  summary: 'Foundation in C++, algorithms, data structures; calculus, linear algebra, discrete math.'
}];

/* ========== Components ========== */

const ProjectCard = _ref => {
  let project = _ref.project,
    index = _ref.index;
  return /*#__PURE__*/React.createElement("article", {
    className: "project-item section-reveal card-glow-border",
    "data-index": index
  }, /*#__PURE__*/React.createElement("h3", null, project.title), project.links.length > 0 && /*#__PURE__*/React.createElement("h5", null, project.links.map((link, i) => /*#__PURE__*/React.createElement("span", {
    key: link.url
  }, i > 0 && ' | ', /*#__PURE__*/React.createElement("a", {
    href: link.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Link to ", link.label)))), /*#__PURE__*/React.createElement("div", {
    className: "project-content"
  }, project.media.filter(m => m.src).length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "project-media"
  }, project.media.filter(m => m.src).map((m, i) => m.type === 'image' ? /*#__PURE__*/React.createElement("img", {
    key: i,
    src: m.src,
    alt: m.alt || project.title
  }) : /*#__PURE__*/React.createElement("video", {
    key: i,
    width: "385",
    height: "250",
    controls: true
  }, /*#__PURE__*/React.createElement("source", {
    src: m.src,
    type: "video/mp4"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "project-description"
  }, project.description.map((block, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, block.heading && /*#__PURE__*/React.createElement("h4", null, block.heading), block.paragraphs.map((para, j) => /*#__PURE__*/React.createElement("p", {
    key: j
  }, para)))))));
};

/* ========== App ========== */

const SECTION_IDS = ['about', 'projects', 'work', 'education'];
const navItems = SECTION_IDS.map(id => ({
  id,
  label: id.charAt(0).toUpperCase() + id.slice(1)
}));
const THEME_KEY = 'portfolio-theme';
const App = () => {
  const _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    navOpen = _useState2[0],
    setNavOpen = _useState2[1];
  const _useState3 = useState('about'),
    _useState4 = _slicedToArray(_useState3, 2),
    activeSection = _useState4[0],
    setActiveSection = _useState4[1];
  const _useState5 = useState(() => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored === 'light' || stored === 'dark') return stored;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
      }
      return 'dark';
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    theme = _useState6[0],
    setTheme = _useState6[1];
  const mainRef = useRef(null);
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_) {}
  }, [theme]);
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setNavOpen(false);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      });
    }, {
      rootMargin: '-40px 0px -40px 0px',
      threshold: 0
    });
    document.querySelectorAll('.section-reveal').forEach(el => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "header-logo",
    onClick: e => {
      e.preventDefault();
      scrollToSection('about');
    }
  }, "Lukas Licon"), /*#__PURE__*/React.createElement("nav", {
    id: "nav-menu",
    className: "navbar ".concat(navOpen ? 'navbar-open' : ''),
    "aria-hidden": !navOpen
  }, /*#__PURE__*/React.createElement("ul", {
    className: "nav-list"
  }, navItems.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.id
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => scrollToSection(item.id),
    className: activeSection === item.id ? 'active' : ''
  }, item.label))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "nav-resume button button-shimmer",
    href: "resumes/AIEngineer-Resume.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => setNavOpen(false)
  }, "Resume")))), /*#__PURE__*/React.createElement("div", {
    className: "header-right"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "theme-toggle",
    onClick: toggleTheme,
    "aria-label": theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    title: theme === 'dark' ? 'Light mode' : 'Dark mode'
  }, /*#__PURE__*/React.createElement("span", {
    className: "theme-toggle-icon",
    "aria-hidden": "true"
  }, theme === 'dark' ? '☀️' : '🌙')), /*#__PURE__*/React.createElement("a", {
    href: "mailto:lukas@licons.com",
    className: "header-contact"
  }, "Contact me: lukas@licons.com"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nav-toggle",
    "aria-expanded": navOpen,
    "aria-controls": "nav-menu",
    "aria-label": "Toggle menu",
    onClick: () => setNavOpen(!navOpen)
  }, /*#__PURE__*/React.createElement("span", {
    className: "hamburger-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hamburger-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hamburger-line"
  })))), /*#__PURE__*/React.createElement("main", {
    ref: mainRef
  }, /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "content-box section-reveal in-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-header"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/profilepic.jpg",
    alt: "Lukas Licon",
    className: "about-image"
  }), /*#__PURE__*/React.createElement("div", {
    className: "about-title-block"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero-title-gradient hero-glow"
  }, "Lukas Daniel Licon"), /*#__PURE__*/React.createElement("p", {
    className: "about-tagline"
  }, "AI Engineer \xB7 Gameplay Programmer"))), /*#__PURE__*/React.createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/React.createElement("p", null, "I'm a gameplay programmer and software engineer focused on C++, Unreal Engine, and AI-driven systems. My path started with a deep love for games and technology\u2014from MMORPGs to building the systems that power them."), /*#__PURE__*/React.createElement("p", null, "I combine rigorous programming with hands-on development: complex systems, Unreal Engine, and C++ are where I thrive. I also specialize in AI inference and runtime integration\u2014training models and LoRAs, dataset and emotion research, and applying speech-to-text, text-to-text, and text-to-speech in games so NPCs can respond with personality and nuance on-device, without cloud APIs."), /*#__PURE__*/React.createElement("p", null, "I'm driven to make advanced AI practical and impactful in real time\u2014whether that's responsive NPCs, runtime inference pipelines, or evaluation and integration. I'm eager to work with teams that want to push what's possible in dynamic, intelligent experiences."))), /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "content-box"
  }, /*#__PURE__*/React.createElement("h2", null, "Projects"), projects.map((project, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: i,
    project: project,
    index: i
  }))), /*#__PURE__*/React.createElement("section", {
    id: "work",
    className: "content-box"
  }, /*#__PURE__*/React.createElement("h2", null, "Work Experience"), /*#__PURE__*/React.createElement("div", {
    className: "work-grid"
  }, workItems.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "item-container section-reveal card-glow-border",
    "data-index": i
  }, /*#__PURE__*/React.createElement("img", {
    src: item.logo,
    alt: item.company,
    className: "item-logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "item-description"
  }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("p", {
    className: "item-title"
  }, item.title)), /*#__PURE__*/React.createElement("p", {
    className: "item-meta"
  }, item.company, " \xB7 ", item.dates), /*#__PURE__*/React.createElement("p", null, item.summary), item.tech && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Tech:"), " ", item.tech)))))), /*#__PURE__*/React.createElement("section", {
    id: "education",
    className: "content-box"
  }, /*#__PURE__*/React.createElement("h2", null, "Education"), /*#__PURE__*/React.createElement("div", {
    className: "education-grid"
  }, educationItems.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "item-container section-reveal card-glow-border",
    "data-index": i
  }, /*#__PURE__*/React.createElement("img", {
    src: item.logo,
    alt: item.name,
    className: "item-logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "item-description"
  }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("p", {
    className: "item-title"
  }, item.name)), /*#__PURE__*/React.createElement("p", {
    className: "item-meta"
  }, item.degree, " \xB7 ", item.year), /*#__PURE__*/React.createElement("p", null, item.summary)))))), /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("p", null, "Contact me: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:lukas@licons.com"
  }, "lukas@licons.com")), /*#__PURE__*/React.createElement("div", {
    className: "footer-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/lukas-licon/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/lukaslicon",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "GitHub")))));
};
createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
