import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                Logo
                </div>
                <nav>
                  <a href="#ourStory">Our Story</a>
                  <a href="#Reviews">Reviews</a>
                  <a href="#specialMenu">Special Menu</a>
                  <a href="#header">Reservations</a>
                </nav>
            </div>
        </header>
    );
  }
}

export default Header;
