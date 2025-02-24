import React, { useState } from "react";
import axios from "axios";
import "./Signin.css";  // Import the CSS file

const Signin = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/auth/signin", formData);
            alert(data.message);
            localStorage.setItem("token", data.token); // Store token
        } catch (error) {
            alert(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2 className="signin-title">Sign In</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="signin-input"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="signin-input"
                        required
                    />
                    <button type="submit" className="signin-button">Sign In</button>
                </form>
                <p className="signin-text">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Signin;
