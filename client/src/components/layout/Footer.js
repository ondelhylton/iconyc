import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <Fragment>
      
    <div className="footer">
    <div className="footerDivs">

        {/* <div className="footerContainers">
        <ul>
        <li>
            <Link to='/technology'>Spots</Link>
            </li>

            <li>
            <Link to='/profiles'>Climate Center</Link>
            </li>
            <li>
            <Link to='/posts'>Blog</Link>
            </li>
            
            </ul>
        </div>


        <div className="footerContainers">
        <ul>
        
        <li>
            <Link to='https://github.com/ondelhylton/Foglio_MERN'>About</Link>
            </li>
          <li>
            <Link to='mailto:webmaster@example.com'>Contact Us</Link>
            </li>
            
            <li class="copyright">©Copyright ICONYC Team</li>

            </ul>
        </div> */}

        <div className="footerContainers">
        <h1>
        <Link to='/'>
        <img src={require('./timesup.png')} alt="fireSpot"/>
        </Link>
      </h1>
        </div>



        </div>
    </div>
      
    </Fragment>
  );
};

export default Footer;
