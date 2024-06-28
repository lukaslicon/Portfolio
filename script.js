const { createRoot } = ReactDOM;

const App = () => {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>This is a simple React application.</p>
        </div>
    );
};

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(<App />);
