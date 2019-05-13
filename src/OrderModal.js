import React, { Component } from "react";

class OrderModal extends Component {
  render() {
    return (
      <div className="bg">
        <section id="orderModal">
          <h1 className="title">Order Online</h1>
          <button onClick={this.props.trigger}>
          <i className="fas fa-times"></i>
          </button>
        </section>
      </div>
    );
  }
}

export default OrderModal;
