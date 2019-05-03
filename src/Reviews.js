import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Reviews extends Component {
  constructor(props) {
    super(props);
      this.state = {
          currentReview: 0,
          reviews: [
            {
                company: 'The Food Network',
                author: 'Joe Bastiachi',
                authorInfo: 'Winner Of The Chef Masters',
                highlight: 'Best Poke Restaurant in Los Angeles!',
                review: 'Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.'
            },
            {
                company: 'Gordon Ramsay\'s Best Kitchen Dream',
                author: 'Gordon Ramsay',
                authorInfo: 'Michelin Star Chef',
                highlight: 'Best Poke Restaurant in Los Angeles!',
                review: 'Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.'
            },
            {
                company: 'Chopped',
                author: 'Anne Casella',
                authorInfo: 'Winner Of Chopped',
                highlight: 'Best Poke Restaurant in Los Angeles!',
                review: 'Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.'
            },
            {
                company: 'Iron Chef America',
                author: 'Rokusaburo Tsai',
                authorInfo: 'Winner Of The Iron Chef America',
                highlight: 'Best Poke Restaurant in Los Angeles!',
                review: 'Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.'
            },
            {
                company: 'Chef\'s Table',
                author: 'Joe Bastiachi',
                authorInfo: 'Winner Of The Chef\'s Table',
                highlight: 'Best Poke Restaurant in Los Angeles!',
                review: 'Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.'
            }
          ]
      }
  }

  loopedReviews = function() {
    return (
      <div>
        <h2>{this.state.reviews[this.state.currentReview].company}</h2>
        <h4>"{this.state.reviews[this.state.currentReview].highlight}"</h4>
        <p>{this.state.reviews[this.state.currentReview].review}</p>
        <div className="author"><strong>{this.state.reviews[this.state.currentReview].author}</strong> - <em>{this.state.reviews[this.state.currentReview].authorInfo}</em></div>
      </div>
    )
  }

  plusOne = () => {
    if (this.state.currentReview < 4) {
      return this.setState({
        currentReview: this.state.currentReview + 1
      }, () => {
        console.log(this.state.currentReview);
      })
    }
  }
  
  minusOne = () => {
    if (this.state.currentReview > 0) {
      this.setState({
        currentReview: this.state.currentReview - 1
      }, () => {
        console.log(this.state.currentReview);
      });
    }
  }

  render() {
    return (
        <section id="Reviews">
            <div className="container">
              <div className="row">
                <div className="col-md-8 side-img">
                  <div className="side-img">
                    <img src="https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg" alt="chef"/>
                  </div>
                </div>
                <div className="col-md-4">
                  <h5 className="title">REVIEW</h5>
                  {this.loopedReviews()}
                </div>
                <div className="arrows">
                <FontAwesomeIcon icon={faArrowLeft} onClick={this.minusOne}
                  className={`faArrowLeft 
                  ${(this.state.currentReview > 0) ? 'ready' : ''}`}
                />
                <FontAwesomeIcon icon={faArrowRight} onClick={this.plusOne}
                  className={`faArrowRight 
                  ${(this.state.currentReview === (this.state.reviews.length - 1)) ? '' : 'ready'}`}
                />  
              </div>
              </div>
            </div>
        </section>
    );
  }
}

export default Reviews;