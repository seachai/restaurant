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
                    <a href="#app">Menu</a>
                    <a href="#app">Party Platters</a>
                    <a href="#app">Locations</a>
                    <a href="#app">Rewards</a>
                    <a href="#app">Order Online</a>
                </nav>
            </div>
        </header>
    );
  }
}

export default Header;
