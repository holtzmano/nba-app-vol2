import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ButtonLayout from './components/ButtonLayout';
import Players from './components/Players';
import FunFacts from './components/FunFacts';
import About from "./components/About";
import CrewMembers from "./components/CrewMembers";
import Payment from "./components/Payment";
import PastWinners from "./components/PastWinners";
import Rules from "./components/Rules";
import BettingGuesses from "./components/BettingGuesses";
import Chat from "./components/Chat";

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home username={username} setUsername={setUsername} password={password} setPassword={setPassword} />} />
                    <Route path="/buttons" element={<ButtonLayout username={username} />} />
                    <Route path="/players" element={<Players />} />
                    <Route path="/funFacts" element={<FunFacts />} />
                    <Route path="/guesses" element={<BettingGuesses />} />
                    <Route path="/pastWinners" element={<PastWinners />} />
                    <Route path="/crewMembers" element={<CrewMembers />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
