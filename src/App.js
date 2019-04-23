import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';
import TopHero from './TopHero';
import OurStory from './OurStory';
import SpecialMenu from './SpecialMenu';
import RandomQuote from './RandomQuote';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import './App.scss';

library.add(faArrowLeft)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopHero />
        <OurStory />
        <SpecialMenu />
        <RandomQuote />
        <Reviews />
        <ContactUs />
      </div>
    );
  }
}

export default App;
