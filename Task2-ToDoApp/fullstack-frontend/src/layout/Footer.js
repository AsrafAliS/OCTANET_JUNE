import React from 'react';

const footerStyle = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  backgroundColor: '#343a40',
  color: 'white',
  padding: '10px 20px', /* Adjusted padding for a more compact footer */
  textAlign: 'center',
  fontSize: '14px' /* Reduced font size for the copyright notice */
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>&copy; 2024 Your Company. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
