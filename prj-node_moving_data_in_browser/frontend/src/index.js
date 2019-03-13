import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom"; //router: uses the browser’s History API to create real URLs.


//ReactDOM.render( <App/> , document.getElementById('root'));

// react router: Router to render our App component
ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
  