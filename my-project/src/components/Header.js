import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>
      <h1>MET</h1>
      <nav>
        <a href="#" style={{ color: 'white', marginRight: '10px' }}>Home</a>
        <a href="#" style={{ color: 'white', marginRight: '10px' }}>About</a>
        <a href="#" style={{ color: 'white' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
