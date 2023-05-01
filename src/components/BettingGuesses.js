import React from "react";
import bets from './bets.json';
import players from "./Players";
import './BettingGuesses.css';

const BettingGuesses = () => {
    return (
        <div className="containers">
            <h2 className="titles">Betting Guesses</h2>
            <ul>
                {bets.map((player, index) => (
                    <li key={index}>
                        <h3> {player.name}</h3>
                        <ul>
                            {player.bets.map((bet, betIndex) => (
                            <li key={bet.index}>
                                {bet.series}: {bet.winner} in {bet.games} games
                            </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BettingGuesses;
