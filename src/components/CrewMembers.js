import React from 'react';

const CrewMembers = () => {
    return (
        <div className="container">
            <h2 className="title">Crew Members</h2>
            <p className="text">{crewMembers}</p>
        </div>
    );
};

const crewMembers = "Crew Members:\n" +
    "Name: Dan Schapiro\n" +
    "Name: Asaf Sasson\n" +
    "Name: Oren Holtzman\n";

export default CrewMembers;
