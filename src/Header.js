import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      mobileMenu: false
    };
  }
  toggle = () => {
    this.setState({
      mobileMenu: !this.state.mobileMenu
    });
  };

  render() {
    return (
        <header>
            <div className="container">
              <div className="top-nav">
              <div className="logo">
                Logo
                </div>
                <div className="mobile-bar" onClick={this.toggle}>
                  <i className="fas fa-bars"></i>
                </div>
              </div>

                <nav className="menu">
                  <a href="#ourStory">Our Story</a>
                  <a href="#Reviews">Reviews</a>
                  <a href="#specialMenu">Special Menu</a>
                  <a href="#ourStory">Order Online</a>
                </nav>
                <nav className={`mobile-menu ${this.state.mobileMenu ? "active" : ""}`}>
                  <a href="#ourStory">Our Story</a>
                  <a href="#Reviews">Reviews</a>
                  <a href="#specialMenu">Special Menu</a>
                  <a href="#ourStory">Order Online</a>
                </nav>
            </div>
        </header>
    );
  }
}

export default Header;
