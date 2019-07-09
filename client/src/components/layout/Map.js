import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {


    return (
      <MDBRow>
      <MDBCol lg="1" className="text-center text-lg-left">
</MDBCol>

<MDBCol lg="10" className="text-center text-lg-left">
</MDBCol>
      <Map
        google={this.props.google}
        width={900}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
            <MDBCol lg="1" className="text-center text-lg-left">
</MDBCol>
       </MDBRow>
    );
   
  }
}



export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyBMlxOXkly6qiSzB5pGkPDJD0qFoUxpqjU'
  }
))(MapContainer)