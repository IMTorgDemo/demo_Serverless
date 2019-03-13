import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./output.css";


export default class Output extends Component {
    constructor() {
        super();
        this.state = {
            msg: [],
        };
    }

    componentWillMount() {
        fetch('https://o0kzk23kf3.execute-api.us-east-1.amazonaws.com/dev/output')
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({ msg: data });
                console.log("state", this.state.msg);
            })
    }

    render() {
        let msg = this.state.msg;
        return ( 
            <div className="Home">
            <div className="lander">
            {/*Example  of displaying the state */}
            <h1> Hi, { msg }! </h1> 
            </div>
            </div>

        )
    }
}
