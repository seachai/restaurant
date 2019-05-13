import React, { Component } from "react";

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
                  {this.props.companyInfo.city},{" "}
                  <span>{this.props.companyInfo.state}</span>
                </div>

                <h6 className="address">
                  {this.props.companyInfo.address} <br />
                  {this.props.companyInfo.city}, {this.props.companyInfo.state}{" "}
                  {this.props.companyInfo.zipcode}
                </h6>

                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@pokepoke.com">
                    {this.props.companyInfo.email}
                  </a>
                </p>
              </div>
              <div className="col-md-6">
                <h6>Phone:</h6>
                <div className="title">{this.props.companyInfo.phone}</div>
                <h6>Hours:</h6>
                <p>
                  Mon - Fri <br />
                  from 10AM - 10PM <br />
                  <br />
                  Sat - Sun: <br />
                  from 10AM - 10PM
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
