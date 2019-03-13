import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";

import Routes from "./routes";
import { LinkContainer } from "react-router-bootstrap";



class App extends Component {

    render() {
        return ( 
<div>
            {/*
    Creating a fixed width container using Bootstrap in div.container.
    Adding a Navbar inside the container that fits to its container’s width using the attribute fluid.
    Using Link component from the React-Router to handle the link to our app’s homepage (without forcing the page to refresh).
            */}
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/input">
              <NavItem>Input</NavItem>
            </LinkContainer>
            <LinkContainer to="/output">
              <NavItem>Output</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
{/*<Routes /> as we navigate to different routes in our app, the portion below the navbar will change to reflect that. */}
{/* </LinkContainer> for links to pages*/}

</div>

        )
    }
}



export default App;