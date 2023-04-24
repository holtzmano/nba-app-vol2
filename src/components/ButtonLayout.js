import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonLayout.css'

const ButtonLayout = () => {
    return (
      <div className="button-layout">
        {buttons.map((button, index) => (
          <Link key={index} to={button.url}>
            <button className="medium-button">{button.label}</button>
          </Link>
        ))}
      </div>
    );
  };
  

const buttons = [
    { label: 'Button 1', url: '/page1' },
    { label: 'Button 2', url: '/page2' },
    { label: 'Button 3', url: '/page3' },
    { label: 'Button 4', url: '/page4' },
    { label: 'Button 5', url: '/page5' },
    { label: 'Button 6', url: '/page6' },
    { label: 'Button 7', url: '/page7' },
    { label: 'Button 8', url: '/page8' },
  ];

  

export default ButtonLayout;
