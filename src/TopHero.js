import React, { Component } from 'react';

class TopHero extends Component {
  render() {
    return (
        <section id="topHero">
            <div className="container">
                <div className="title">
                    <h5>
                        Welcome
                    </h5>
                    <h1>
                        Poké Poké
                    </h1>
                </div>
                <div className="contact-info">
                    <div className="booking">Book Table Directly</div>
                    <h2>(777) 777 - 7777</h2>
                    <div className="hours">
                        Opening Hours <strong>Mon - Fri:</strong> 9AM - 9PM /
                        <strong> Sat - Sun:</strong> 9AM - 9PM
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default TopHero;