import React, { Component } from "react";

class SpecialMenu extends Component {
  loopedMenu = function() {
    return this.props.specialMenu.map((item, index) => {
      return (
        <div className="col-md-4" key={index}>
          <div className="box">
            <div className="box-img" style={{ backgroundImage: `url('${item.image}')`}}/>
            <div className="price-circle">{item.price}</div>
            <span className="title">{item.title}</span>
            <p className="details">{item.description}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <section id="specialMenu" className="textureBG">
        <div className="container">
          <h5 className="title">Special Menu</h5>
          <h2>Delicious Flavor of Hawaii</h2>
          <div className="row boxes">{this.loopedMenu()}</div>
          <a href="#SpecialMenu" className="link">
            View Full More
          </a>
        </div>
      </section>
    );
  }
}

export default SpecialMenu;
