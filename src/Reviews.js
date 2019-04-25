import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Reviews extends Component {

  loopedReviews = function() {
    return (
      <div>
        <h2>{this.props.reviews.reviews[this.props.reviews.reviewStatus.currentReview].company}</h2>
        <h4>"{this.props.reviews.reviews[this.props.reviews.reviewStatus.currentReview].highlight}"</h4>
        <p>{this.props.reviews.reviews[this.props.reviews.reviewStatus.currentReview].review}</p>
        <div className="author"><strong>{this.props.reviews.reviews[this.props.reviews.reviewStatus.currentReview].author}</strong> - <em>{this.props.reviews.reviews[this.props.reviews.reviewStatus.currentReview].authorInfo}</em></div>
      </div>
    )
  }

  onClick = () => {
    this.setState({
      reviewStatus: this.reviewStatus.currentReview + 1
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
                <div className="col-md-4">
                  <h5 className="title">REVIEW</h5>
                  {this.loopedReviews()}
                  <div className="arrows">
                  <FontAwesomeIcon icon={faArrowLeft} 
                    className={`faArrowLeft 
                    ${(this.props.reviews.reviewStatus.currentReview > 0) ? 'ready' : ''}`}
                  />
                  <FontAwesomeIcon icon={faArrowRight} onClick={onClick()}
                    className={`faArrowRight 
                    ${(this.props.reviews.reviewStatus.currentReview === (this.props.reviews.reviews.length - 1)) ? '' : 'ready'}`}
                  />  
                </div>
                </div>
              </div>
            </div>
        </section>
    );
  }
}

export default Reviews;