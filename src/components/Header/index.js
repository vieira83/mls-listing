import React from "react";

function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="App-header__darker" />
        <div className="App-header__heading container">
          <h1> Explore MLS Listings </h1>
          <h5 className="App-header__sub-heading"><i>Find Your Next House!</i></h5>
        </div>
      </header>
    </div>
  );
}

export default Header;
