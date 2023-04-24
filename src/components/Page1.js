import React from 'react';

const Page1 = () => {
  const names = [
    'John',
    'Michael',
    'William',
    'David',
    'Richard',
    'Charles',
    'Joseph',
    'Thomas',
    'Christopher',
    'Daniel',
  ];

  return (
    <div>
      <h2>Names of Men at Age 30</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page1;
