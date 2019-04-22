import React, { Component } from 'react';

class SpecialMenu extends Component {
  render() {
    return (
        <section id="specialMenu">
            <div className="container">
                <h5 className="title">Special Menu</h5>
                <h2>Delicious Flavor of Hawaii</h2>
                <div className="row">
                <div className="col-md-4">
                    <div className="box">
                        <div className="box-img"></div>
                        <div className="price-circle">$25</div>
                        <span className="title">Bowl Numero Uno</span>
                        <p className="details">Salmon, Avocado, Edamame, Cucumber, Masago</p>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
                <div className="col-md-4">

                </div>
                </div>
                <a href="#SpecialMenu">View Full More</a>
            </div>
        </section>
    );
  }
}

export default SpecialMenu;