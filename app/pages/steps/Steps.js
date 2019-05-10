import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Step from './Step';

export default class Steps extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props.match);
        return (<Router>
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/1`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/2`}>Props v. State</Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.path}/:id`} component={Step} />
                <Route
                    exact
                    path={this.props.match.path}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        </Router>)
    }
}