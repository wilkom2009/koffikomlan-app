import React, { Component } from 'react';
import Social from '../components/Social';
import { Helmet } from "react-helmet";


class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <Helmet>
                    <title>KoffiKomlan - Contact</title>
                    <meta name="description" content="Wilson's portfolio web application" />
                </Helmet>
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email  :   naafi96@gmail.com</h3>
                <h3>Instagram   :   @iam_naafi</h3>
                <Social />
            </div>
        )
    }
}

export default Contact
