import React, { Component } from 'react';
import { Helmet } from "react-helmet";


class About extends Component {
    render() {
        return (
            <div className="condiv">
                <Helmet>
                    <title>KoffiKomlan - About</title>
                    <meta name="description" content="Wilson's portfolio web application" />
                </Helmet>
                <h1 className="subtopic">About Me</h1>
                <h4>Hey there,</h4>
                <h1>I'm Wilson Koffi KOMLAN</h1>
                <h3>Full Stack Web <u>Developer</u> | Cloud <u>Developer</u></h3>
                <br></br>
                <p>I started my journey in developing app since 2010 after graduation. Software development is my center of interest, and by the raising of Cloud computing, I become a Cloud enthousiast because like it or not, 
                Cloud computing is being on the top Technologies to learn in Computer world! As code geecks, I like to share my code on Github and discuss with Communities whether on Twitter or Discord.
            </p>

            </div>
        )
    }
}

export default About
