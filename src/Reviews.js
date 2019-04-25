import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Reviews extends Component {

  loopedReviews = function() {
    return this.props.reviews.map((item, index) => {;
        return (
        <div className="col-md-4" key={index}>
          <h5 className="title">REVIEW</h5>
          <h2>{item.company}</h2>
          <h4>{item.highlight}</h4>
          <p>{item.review}</p>
          <div className="author"><strong>{item.author}</strong> - <em>{item.authorInfo}</em></div>
          <div className="arrows">
            <FontAwesomeIcon icon={faArrowLeft} className="faArrowLeft"/>
            <FontAwesomeIcon icon={faArrowRight} className="faArrowRight ready"/>  
          </div>
        </div>
        )
    })
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
                {this.loopedReviews()}
              </div>
            </div>
        </section>
    );
  }
}

export default Reviews;