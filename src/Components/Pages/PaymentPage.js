import React from 'react';
import SideMenu from './SideMenu';

const containerStyle = {
  display: 'flex', // Make the children of this container flex items
  marginLeft: '320px',
};

const contentStyle = {
  flex: 1, // Allow the content to grow and take up the available space
  padding: '20px', // Add some padding for spacing
  color: 'black',
};

function Payment() {
  return (
    <div style={containerStyle}>
      <SideMenu />
      <div style={contentStyle}>
        <h1>Account Page</h1>
        <p>This is the content of the Payment page.</p>
      </div>
    </div>
  );
}

export default Payment;
