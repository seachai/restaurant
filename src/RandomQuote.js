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

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     if (this.state.counter < this.state.quoteList.length) {
  //       this.setState({
  //         counter: this.state.counter + 1
  //       });
  //     } else {
  //       this.setState({
  //         counter: 0
  //       });
  //     } 
  //   }, 10000);
  // }

  // componentWillUnmount() {
  //   if (this.state.counter === this.state.quoteList.length) {
  //     clearInterval(this.interval);
  //   }
  // }

  render() {
    return (
      <section id="randomQuote">
        <div className="container">
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
