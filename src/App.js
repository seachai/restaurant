import React, { Component } from 'react';
import globalState from './globalState';
import Header from './Header';
import TopHero from './TopHero';
import OurStory from './OurStory';
import SpecialMenu from './SpecialMenu';
import RandomQuote from './RandomQuote';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import Footer from './Footer';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        globalState
      }
      console.log(this.state);
      console.log(this.state.currentReview);
    }
  
  render() {
    return (
      <div className="App">
        <Header />
        <TopHero 
          companyInfo={this.state.globalState.companyInfo}
        />
        <OurStory />
        <SpecialMenu 
          specialMenu={this.state.globalState.specialMenu}
        />
        <RandomQuote />
        <Reviews
          reviews={this.state.globalState}  
          increment={this.state.plusOne}
          // decrement={this.minusOne}
        />
        <ContactUs 
          companyInfo={this.state.globalState.companyInfo}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
