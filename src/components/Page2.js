import React, { useState } from 'react';

const Page2 = () => {
  const [hyperlink, setHyperlink] = useState('');

  const handleChange = (e) => {
    setHyperlink(e.target.value);
  };

  return (
    <div>
      <h2>Enter a Hyperlink</h2>
      <input
        type="text"
        placeholder="Enter a hyperlink"
        value={hyperlink}
        onChange={handleChange}
        style={{ width: '100%', padding: '12px', marginBottom: '10px' }}
      />
      <p>Entered hyperlink: {hyperlink}</p>
    </div>
  );
};

export default Page2;
