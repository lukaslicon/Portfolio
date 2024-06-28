const { useState } = React;
const { createRoot } = ReactDOM;

const App = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const renderContent = () => {
        switch (activeTab) {
            case "Home":
                return (
                    <div>
                        <h2>Resume and Experiences</h2>
                        <p>This section contains my resume and other experiences.</p>
                    </div>
                );
            case "About":
                return (
                    <div>
                        <h2>About Me</h2>
                        <p>This section contains information about Lukas Daniel Licon.</p>
                    </div>
                );
            case "Projects":
                return (
                    <div>
                        <h2>Projects</h2>
                        <p>This section showcases various projects worked on by Lukas Daniel Licon.</p>
                    </div>
                );
            case "Contact":
                return (
                    <div>
                        <h2>Contact</h2>
                        <p>This section provides contact information for Lukas Daniel Licon.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Lukas Daniel Licon</h1>
                <p>Gameplay Programmer, Level Designer, Web Developer, Software Engineer</p>
            </div>
            <div className="content-box">
                <div className="navbar">
                    <button onClick={() => setActiveTab("Home")}>Home</button>
                    <button onClick={() => setActiveTab("About")}>About</button>
                    <button onClick={() => setActiveTab("Projects")}>Projects</button>
                    <button onClick={() => setActiveTab("Contact")}>Contact</button>
                </div>
                <div className="content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(<App />);
