import React, { useState } from "react";
import "./Feedback.css"; // Importing CSS

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      <h2>We Value Your Feedback!</h2>
      {submitted ? (
        <div className="success-message">
          <p>✅ Thank you, <strong>{name}</strong>! Your feedback has been submitted.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Write your feedback here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
