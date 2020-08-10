import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import { Helmet } from "react-helmet";

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <Helmet>
                    <title>KoffiKomlan - Education</title>
                    <meta name="description" content="Wilson's portfolio web application" />
                </Helmet>
                <h1 className="subtopic">My Education</h1>
                <Widecard title="IT DUT - Software Engineering" where="Université de Lomé" from="2007" to="2009" />
            </div>
        )
    }
}

export default Education
