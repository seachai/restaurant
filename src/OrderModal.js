import React, { Component } from "react";

class OrderModal extends Component {
  render() {
    return (
      <div className="bg">
        <section id="orderModal">
          <div className="left-modal">
            <h1 className="title">Order Online</h1>
            <p>Be the first to know when online ordering is available!</p>

            <div class="input-block">
              <label for="email" class="input-label">
                Email
              </label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>

            <button class="input-button">Sign Up</button>
          </div>
          <div className="right-modal">
            <button onClick={this.props.trigger}>
              <i className="far fa-times-circle" />
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default OrderModal;
