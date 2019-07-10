import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const React360App = () => {

  return (
    <section className="my-5">
      <MDBRow>

   

      <MDBCol lg="1" className="text-center text-lg-left">
        </MDBCol>
        <MDBCol lg="10" className="react360">

        <Iframe url="https://timesupreact.herokuapp.com/home.html"
        width="1600px"
        height="900px"
        id="myId"
        frameborder="0" 
        bgcolor="#000000"
        />
          <div><strong><a href="https://timesupreact.herokuapp.com/home.html" target="_blank">Full Size React360 video</a>
          </strong></div>
        </MDBCol>

        <MDBCol lg="1" className="text-center text-lg-left">
        </MDBCol>

</MDBRow>
</section>
  );
};


export default React360App;
