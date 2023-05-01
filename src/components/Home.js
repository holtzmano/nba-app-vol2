import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";

const Home = ({ username, setUsername, password, setPassword }) => {
    const navigate = useNavigate();

    // Add allowed usernames and passwords here
    const users = {
        user1: 'p1',
        Oren: 'turi',
        user3: 'password3',
        // Add more users as needed
    };

    const handleLogin = () => {
        // Check if the entered username and password match any stored values
        if (users[username] && users[username] === password) {
            navigate('/buttons');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    return (
        <form className="home">
            <div>
            <h2>Login to NBA App</h2>
                <h3> Enter your username and password and then press enter or click Login</h3>
                <div class={"input-container"}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            <button onClick={handleLogin}>Login</button>
            </div>
        </form>
    );
};

export default Home;
