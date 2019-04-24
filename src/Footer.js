import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <nav className="menu">
                    <a href="#ourStory">Our Story</a>
                    <a href="#Reviews">Reviews</a>
                    <a href="#specialMenu">Special Menu</a>
                    <a href="#header">Reservations</a>
                    <a href="#contactUs">Contact Us</a>
                </nav>

                <ul className="social-media">
                <li><a href="https://www.facebook.com/">Facebook</a></li>
                <li><a href="https://twitter.com/">Twitter</a></li>
                <li><a href="https://www.google.com/">Google Plus</a></li>
                <li><a href="https://www.youtube.com/">YouTube</a></li>
                </ul>

                <div className="copyright">
                    &copy; 2019 Copyright
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
