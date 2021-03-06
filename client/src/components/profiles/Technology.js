import React, { Fragment, Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import LightboxPage from '../profiles/Lightbox';
import BlogPage from '../profiles/Blog';
// import GoogleApiWrapper from '../layout/Map';

const Technology = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
        {/* <GoogleApiWrapper></GoogleApiWrapper> */}
    </Fragment>
    

      )}
      <br></br>
     <Fragment>
     <LightboxPage></LightboxPage>
     </Fragment>

     <Fragment>
     <BlogPage></BlogPage>
     </Fragment>
    </Fragment>
    
  );
  
};


Technology.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Technology);
