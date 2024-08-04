import React from 'react';
import logo from '/logo.png';

const Logo = () => {
  return (
    <div className="logo-container" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="Logo" style={{ height: '150px' }} />
    </div>
  );
};

export default Logo;
