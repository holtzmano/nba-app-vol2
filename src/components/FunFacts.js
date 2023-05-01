import React, { useState } from 'react';

const FunFacts = () => {

    return (
        <div className="container">
            <h2 className="title">Fun Facts</h2>
            <p className="text">{nbaStats}</p>
        </div>
    );
};

const nbaStats = "Wilt Chamberlain holds the record for most points scored in a single game with 100 points.\n" +
    "Michael Jordan won 10 scoring titles in his career, the most in NBA history.\n" +
    "Kareem Abdul-Jabbar has the most career points in NBA history with 38,387.\n" +
    "Bill Russell won 11 NBA championships as a player, the most by any player in history.\n" +
    "Shaquille O'Neal is the only player to win the NBA Finals MVP award three consecutive years on different teams.\n" +
    "LeBron James is the only player in NBA history to record 30,000 points, 8,000 rebounds, and 8,000 assists.\n" +
    "Hakeem Olajuwon is the only player in NBA history to record 200 blocks and 200 steals in the same season three times.\n" +
    "Wilt Chamberlain holds the record for most rebounds in a single game with 55.\n" +
    "Kobe Bryant scored 81 points in a single game, the second-highest total in NBA history.\n" +
    "Tim Duncan has the most career playoff double-doubles in NBA history with 164.";



export default FunFacts;
