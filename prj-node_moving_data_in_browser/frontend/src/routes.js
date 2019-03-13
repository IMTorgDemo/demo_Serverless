import React from "react";
import { Route, Switch } from "react-router-dom"; //Switch - renders the first matching route that is defined within it
import Home from "./containers/home";
import Input from "./containers/input";
import Output from "./containers/output";
import NotFound from "./containers/notfound";



export default () =>
  <Switch>
    <Route path="/" exact component={Home} />  {/*exact prop to ensure that it matches the / route exactly*/}
    <Route path="/input" exact component={Input} />
    <Route path="/output" exact component={Output} />

    <Route component={NotFound} /> { /* must always be last line, catch all unmatched routes */ }
  </Switch>;
