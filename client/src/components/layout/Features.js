import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
  return (
    <section className="my-5">
        <br></br>
        <br></br>
        {/* <h4 className="h1-responsive font-weight-bold text-center my-5">
          Features of ICONYC
        </h4> */}
        <MDBRow>
      
        <MDBCol lg="1" className="text-center text-lg-left">
        </MDBCol>
          <MDBCol lg="4" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src={require('../../img/app_small.jpg')} 
              alt="Empire_State_Building"
              style={{width: 520}}
            />
          </MDBCol>
          <MDBCol lg="6">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="orange-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h4 className="font-weight-bold mb-3">Guide to Hundreds of Scenic Points & Roof Decks in NYC</h4>
                <h5 className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="orange-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h4 className="font-weight-bold mb-3">Learn the History & Future Prospects of Each Location</h4>
                <h5 className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                </h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="orange-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h4 className="font-weight-bold mb-3">Play Trivia and Win Special Offers</h4>
                <h5 className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </h5>
              </MDBCol>
                
              </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="orange-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h4 className="font-weight-bold mb-3">Virtual VR: Visualize How Sea Level Rise Will Impact Views</h4>
                <h5 className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </h5>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="1" className="text-center text-lg-left">
        </MDBCol>
        </MDBRow>
        <br></br>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why is it so great?
        </h2>

        
      </section>
  );
}

export default FeaturesPage;
