import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <nav className="menu">
                    <a href="#ourStory">Our Story</a>
                    <a href="#Reviews">Reviews</a>
                    <a href="#specialMenu">Menu</a>
                    <a href="#ourStory">Order Online</a>
                    <a href="#contactUs">Contact Us</a>
                </nav>

                <ul className="social-media">
                <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.google.com/"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a></li>
                </ul>

                <div className="copyright">
                    &copy; 2019 Chai Lee - Made with love
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
