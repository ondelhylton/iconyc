import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Buttons = () => {
  return (
    <Router>
      
      <div className='buttons'>
            <Link to='/register' className='btn btn-home'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-home'>
              Login
            </Link>
          </div>
        </Router>
  );
};

export default Buttons;
