import React, { Component } from 'react';
import Header from './Header';
import TopHero from './TopHero';
import OurStory from './OurStory';
import SpecialMenu from './SpecialMenu';
import RandomQuote from './RandomQuote';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopHero />
        <OurStory />
        <SpecialMenu />
        <RandomQuote />
      </div>
    );
  }
}

export default App;
