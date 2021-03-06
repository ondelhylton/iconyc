import React, { Fragment, Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import LightboxPage from '../profiles/Lightbox';
import Slideshow from '../layout/Slider/index';
import React360App from '../layout/react360';
import Info from '../layout/Info';


const Climate = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Slideshow></Slideshow>
        <LightboxPage></LightboxPage>
        <Info></Info>
 
      

    </Fragment>

      )}
     
    </Fragment>
    
  );
  
};


Climate.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Climate);
