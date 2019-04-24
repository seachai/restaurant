import React, { Component } from 'react';

class SpecialMenu extends Component {
    constructor(props) {
        super(props);
    }

    menu() {
        let loopedMenu = this.state.SpecialMenu.map((item) => {
            console.log(item.title);
            return (
            <div className="col-md-4">
                <div className="box">
                    <div className="box-img"></div>
                    <div className="price-circle">{item.price}</div>
                    <span className="title">{item.title}</span>
                    <p className="details">{item.description}</p>
                </div>
            </div>
            )
        })
    }

  render() {
    return (
        <section id="specialMenu" className="textureBG">
            <div className="container">
                <h5 className="title">Special Menu</h5>
                <h2>Delicious Flavor of Hawaii</h2>
                <div className="row boxes">
                    {this.menu()}
                </div>
                <a href="#SpecialMenu" className="link">View Full More</a>
            </div>
        </section>
    );
  }
}

export default SpecialMenu;