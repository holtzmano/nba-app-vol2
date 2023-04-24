import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Add allowed usernames and passwords here
    const users = {
        user1: 'password1',
        user2: 'password2',
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
        <div className="home">
            <h2>Login</h2>
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
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Home;
