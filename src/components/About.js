import React from "react";

const About = () => {
    return (
        <div className="container">
            <h2 className="title">About</h2>
            <p className="text">{about}</p>
        </div>
    );
};

const about = "This app is for the yearly NBA bet";


export default About;
