import React, { react } from "react";
import Header from "./common/Header";

class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-6">About RealEstate</h3>
                        <hr></hr>
                        <p class="lead">
RealEstate, India’s leading property portal, deals with every aspect of the consumers’ needs in the real estate industry. It is an online forum where buyers, sellers and brokers/agents can exchange information about real estate properties quickly, effectively and inexpensively. At 99acres.com, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutUs;