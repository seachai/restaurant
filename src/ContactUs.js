import React, { Component } from 'react';

class ContactUs extends Component {
  render() {
    return (
        <section id="contactUs" className="textureBG">
            <div className="container">
                <h5 className="title">Contact Us</h5>
                <h2>Delivering First Class Experience</h2>

                <div className="box">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title">
                        Los Angeles, <span>California</span>
                      </div>

                      <h6 className="address">
                        777 Lucky St. <br />
                        Hollywood, CA 12405
                      </h6>

                      <p>
                      <strong>Email:</strong> <a href="mailto:info@pokepoke.com">info@pokepoke.com</a>
                      </p>

                    </div>
                    <div className="col-md-6">
                      <h6>
                        Phone:
                      </h6>
                      <div className="title">
                      (777) 777 - 7777
                    </div>
                      <h6>
                        Lunch Service:
                      </h6>
                      <p>
                        Friday, Saturday and Sunday <br />
                        from 12PM - 1:30PM
                      </p>

                      <h6>
                        Dinner Servce:
                      </h6>
                      <p>
                        Daily <br />
                        from 6PM - 9:30PM
                      </p>
                  </div>
                </div>
                
              </div>
            </div>
        </section>
    );
  }
}

export default ContactUs;