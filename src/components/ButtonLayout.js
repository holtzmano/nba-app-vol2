import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonLayout.css'
import bets from './bets.json';


const ButtonLayout = ({username}) => {

    const getPlayerGuess = (playerName) => {
        const player = bets.find((p) => p.name === playerName);

        if (player){
            return player.bets;
        } else {
            return null;
        }
    };

    console.log({username})
    const singlePlayerGuess = getPlayerGuess(username);

    return (
        <div>
            <h2 align={'center'}>Hello {username}</h2>
            <h3 align={'center'}>Welcome to KYM's NBA betting app</h3>
      <div className="button-layout">

        {buttons.map((button, index) => (
          <Link key={index} to={button.url}>
            <button style={{color: button.color} } className="medium-button">{button.label}</button>
          </Link>
        ))}

      </div>
            <div>
                <h3>Your Guess:</h3>
                {singlePlayerGuess ? (
                <ul>
                    {singlePlayerGuess.map((bet, betIndex) => (
                        <li key={betIndex}>
                            {bet.series}: {bet.winner} in {bet.games} games
                        </li>
                    ))}
                </ul>
                ) : (
                    <p>player not found</p>
                    )
                }
            </div>
        </div>
    );
  };
  

const buttons = [
    { label: 'Players', url: '/players', color: 'red' },
    { label: 'Fun Facts', url: '/funFacts', color: 'blue' },
    { label: 'Guesses', url: '/guesses', color: 'yellow' },
    { label: 'Past Winners', url: '/pastWinners', color: 'green' },
    { label: 'Crew Members', url: '/crewMembers', color: 'blue' },
    { label: 'Rules', url: '/rules', color: 'yellow' },
    { label: 'About', url: '/about', color: 'red' },
    { label: 'Payment', url: '/payment', color: 'blue' },
    { label: 'Chat', url: '/chat', color: 'green' },
    { label: 'Back', url: '/', color: 'blue' }
  ];

  

export default ButtonLayout;
