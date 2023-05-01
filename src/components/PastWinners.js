import React from 'react';

const pastWinnersData = [
    { year: '2022 ', winner: 'Matan Schapiro', key: '1' },
    { year: '2021 ', winner: 'Eran Efrima', key: '2' },
];

const PastWinners = () => {
    const renderItem = (item) => (
        <li key={item.key} className="listItem">
            <span className="year">{item.year}</span>
            <span className="winnerText">{item.winner}</span>
            {/* Optional: Add a team logo next to the winner's name */}
            {/* <img src={getTeamLogo(item.winner)} className="teamLogo" /> */}
        </li>
    );

    return (
        <div className="container">
            <h2 className="title">Past Winners</h2>
            <ul className="pastWinnersList">
                {pastWinnersData.map((item) => renderItem(item))}
            </ul>
        </div>
    );
};

export default PastWinners;
