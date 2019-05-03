import React, { Component } from 'react';
import OrderModal from './OrderModal';

class OurStory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        };
    }

    showModal = () => {
        console.log(this.state.modal);
        this.setState({ modal: true });
    }

    hideModal = () => {
        console.log(this.state.modal);
        this.setState({ modal: false });
    }

    render() {
        return (
            <section id="ourStory">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="our-title">Our Story</h5>
                            <h2>Poke is a craft</h2>
                            <p>Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key. Before they sold out hella aesthetic mustache schlitz heirloom cred put a bird on it brooklyn seitan literally plaid pop-up distillery. Tousled pork belly mumblecore, franzen single-origin coffee tofu chartreuse poutine.</p>
                            <div className="quote">"The best Poke in town." - <strong>Chai Lee</strong></div>
                            <a href="#ourStory" className="order-btn" onClick={this.showModal}>Order</a>
                        </div>
                        <OrderModal 
                            className="modal"
                            modalState={this.state.modal} 
                            handleClose={this.hideModal}
                        />
                        <div className="col-md-6">
                            <div className="salt-bae-img">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurStory;