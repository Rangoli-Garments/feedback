const FeedbackApp = () => {
    const feedbackLinks = {
        google: "https://g.page/r/Celzrcrr0HUoEBM/review",
        justdial: "https://jsdl.in/RSL-IXE1742469116"
    };

    const openFeedback = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div className="container">
            {/* Logo */}
            <img src="logo.png" alt="Company Logo" className="logo" />

            <h1>Leave Us Feedback</h1>
            <p>Please choose a platform to leave your feedback:</p>

            <button className="google-btn" onClick={() => openFeedback(feedbackLinks.google)}>Google Feedback</button>
            <button className="justdial-btn" onClick={() => openFeedback(feedbackLinks.justdial)}>Justdial Feedback</button>
        </div>
    );
};

// Render React App
ReactDOM.createRoot(document.getElementById("root")).render(<FeedbackApp />);
