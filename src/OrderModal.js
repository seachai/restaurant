import React, { Component } from "react";

class OrderModal extends Component {
  render() {
    let modalStyle = {
      position: "fixed",
      transform: "translateX(-50%) translateY(-50%)",
      top: "50%",
      left: "50%",
      padding: "200px",
      backgroundColor: "white",
      border: "1px solid #333"
    };

    return (
      <div style={modalStyle}>
        <section>
          <h1>Order Online</h1>
          <button onClick={this.props.trigger}>
            <i className="fas fa-window-close" />
          </button>
        </section>
      </div>
    );
  }
}

export default OrderModal;
