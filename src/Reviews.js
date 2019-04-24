import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Reviews extends Component {
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
                  <h2>The Food Network</h2>
                  <h4>"Best Poke Restaurant in Los Angeles!"</h4>
                  <p>Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.</p>
                  <div className="author"><strong>Joe Bastiachi</strong> - <em>winner of the chef masters</em></div>
                  <div className="arrows">
                    <FontAwesomeIcon icon={faArrowLeft} className="faArrowLeft"/>
                    <FontAwesomeIcon icon={faArrowRight} className="faArrowRight ready"/>  
                  </div>
                </div>
              </div>
            </div>
        </section>
    );
  }
}

export default Reviews;