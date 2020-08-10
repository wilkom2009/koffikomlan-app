import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['JAVA EE', 'REACT JS', 'NODE JS', 'CLOUD AWS', 'MICROSERVICES ARCHITECTURE']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <Helmet>
                    <title>KoffiKomlan - Skills</title>
                    <meta name="description" content="Wilson's portfolio web application" />
                </Helmet>
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills
