import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/photo_wilson.png';
import Social from '../components/Social';
import { Helmet } from "react-helmet";



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <Helmet>
                    <title>Welcome- KoffiKomlan's Page</title>
                    <meta name="description" content="Wilson's portfolio web application" />
                </Helmet>
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Wilson KOMLAN', 'I am a full stack developer']} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}

export default Home
