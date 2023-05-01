import React from "react";

const Rules = () => {
    return (
        <div className="container">
            <h2 className="title">Rules</h2>
            <p className="text">{rules}</p>
        </div>
    );
};

const rules = "NBA Bet Rules:\n" +
    "Guess the score and team of each series from start to finish.\n" +
    "\n" +
    "The score for each round:\n" +
    "First round = 1 point\n" +
    "Second round = 2 points\n" +
    "Conference Finals = 3 points\n" +
    "Finals = 4 points\n" +
    "\n" +
    "If you guess the two teams playing in a series correctly and also guess the correct result of the series, you will receive 2 times the number of points for that round. For example, if you guessed that the Lakers would beat the Celtics in the finals 4-0, and that was the correct result, you would get 4 points for that round X 2 = 8 points.\n" +
    "\n" +
    "Before the Play In begins, guess 4 teams that you think will advance to the Playoffs. For each correct team you guess, you get 1 point. If you guessed all 4 teams correctly, you start the bet with 4 points.\n" +
    "\n" +
    "Fill in your guess of the playoffs after you already know all the participating teams.\n" +
    "\n" +
    "Guess the Finals MVP of the finals series. The player you guess does not have to be from the team you guessed will win the championship. This category is worth 3 points.";




export default Rules;
