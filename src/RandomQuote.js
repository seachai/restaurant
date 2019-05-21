import React, { Component } from "react";

class RandomQuote extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      quoteList: [
        {
          quote:
            "Food, to me, is always about cooking and eating with those you love and care for.",
          author: "David Chang"
        },
        {
          quote: "For me, cooking is an extension of love.",
          author: "Hedda Sterne"
        },
        {
          quote: "Cooking is an art form, a creative thing.",
          author: "Clarence Clemons"
        }
      ]
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => 
    this.randomNumber(),
    5000
    );
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  randomNumber = () => {
    const numberGenerator = Math.floor(Math.random() * this.state.quoteList.length)
    return this.setState({
      counter: numberGenerator
    })
  }

  render() {
    return (
      <section id="randomQuote">
        <div className="container tracking-in-contract">
          <h1>"{this.state.quoteList[this.state.counter].quote}"</h1>
          <span className="author">
            - {this.state.quoteList[this.state.counter].author} -
          </span>
        </div>
      </section>
    );
  }
}

export default RandomQuote;
