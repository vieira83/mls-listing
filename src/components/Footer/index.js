import React from 'react';

function Footer() {
  return (
      <footer className="App-footer">
        <div className='App-footer__container'>
            <p className="text-center p-0 m-0">
              &copy; Copyright {new Date().getFullYear()}, Explore MLS Listings 
            </p>
        </div>
        
      </footer>
      
  );
}

export default Footer;
