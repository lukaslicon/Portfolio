const { useState } = React;
const { createRoot } = ReactDOM;

const App = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const renderContent = () => {
        switch (activeTab) {
            case "Home":
                return (
                    <div>
                        <h2>About Me</h2>
                        <p>This section is about who I am and what I do.</p>
                    </div>
                );
            case "Projects":
                return (
                    <div>
                        <h2>Projects</h2>
                        <p>This section contains a showcase about my Projects.</p>
                    </div>
                );
            case "Education":
                return (
                    <div>
                        <h2>Education</h2>
                        <p>This contains education from Lukas.</p>
                    </div>
                );
            case "Contact":
                return (
                    <div>
                        <h2>Contact</h2>
                        <p>Feel free to contact me about any business inquiries.</p>
                        <p><a href="mailto:lukas@licons.com">Send Email</a> </p>
                        <p><a href="https://www.linkedin.com/in/lukas-licon/">LinkedIn</a></p>
                        <p><a href="https://github.com/lukaslicon">Github</a></p>
                        
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
                <p>Gameplay Programmer, Game Designer, Web Developer, Software Engineer</p>
            </div>
            <div className="content-box">
                <div className="navbar">
                    <button onClick={() => setActiveTab("Home")}>Home</button>
                    <button onClick={() => setActiveTab("Projects")}>Projects</button>
                    <button onClick={() => setActiveTab("Education")}>Education</button>
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
