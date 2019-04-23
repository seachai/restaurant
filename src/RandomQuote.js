import React, { Component } from 'react';

class RandomQuote extends Component {
  render() {
    return (
        <section id="randomQuote">
            <div className="container">
                <h1>"For me, cooking is an extension of love."</h1>
                <span className="author">- Hedda Sterne -</span>
            </div>
        </section>
    );
  }
}

export default RandomQuote;