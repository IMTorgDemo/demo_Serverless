import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./input.css";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
  }

  validateForm() {
    return this.state.data.length > 0 ;
  }

  // update the state when the user types something into these fields.  This function grabs the id (set as controlId for the <FormGroup>) of the field being changed and updates its state with the value the user is typing in. 
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  // 
  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('https://o0kzk23kf3.execute-api.us-east-1.amazonaws.com/dev/input', {
      method: 'POST',
      crossDomain:true,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Accept, Authorization, Content-Type, Origin"
    },
      body: data,
});
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="data" bsSize="large">
            <ControlLabel>Data</ControlLabel>
            {/* autoFocus - when our form loads, it sets focus to this field*/}
            {/* this.state.data - when the state changes, React will re-render these components with the updated value */}
            <FormControl
              autoFocus 
              type="data"
              value={this.state.data} 
              onChange={this.handleChange}
            />
          </FormGroup>

          {/* !this.validateForm() link up our submit button with our state by using a validate function */}
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}  
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
