import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Info = () => {

  return (
    <section className="my-5">
      <MDBRow>

   

      <MDBCol lg="1" className="text-center text-lg-left">
        </MDBCol>
        <MDBCol lg="10" className="times-square">

        <Iframe url="https://www.360cities.net/embed_iframe/times-square-at-dusk"
        width="1400px"
        height="941px"
        id="myId"
        frameborder="0" 
        bgcolor="#000000"
        />
        </MDBCol>

        <MDBCol lg="1" className="text-center text-lg-left">
        </MDBCol>

</MDBRow>
</section>
  );
};


export default Info;
