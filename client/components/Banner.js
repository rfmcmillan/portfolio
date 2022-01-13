import React from 'react';
import { KeyboardArrowDown } from '@material-ui/icons';
import { Link } from 'react-scroll';

const Banner = () => {
  
  return (
    <div className="container">
      <div className="box">
        <div className="title">
          <span id="block-1"></span>
          <h1 id="full-name">Russ McMillan</h1>
        </div>
        <div className="role">
          <div className="block-2"></div>
          <div className="block-2-remain"></div>
          <p id="job-function">Full Stack Engineer</p>
        </div>
      </div>
      <div id="arrow-container" className="animated fadeInDown">
        <div className="arrow-2">
          <i className="fa fa-angle-down">
            <Link to={'intro'} smooth={true} duration={700}>
              <KeyboardArrowDown />
            </Link>
          </i>
        </div>
        <div className="arrow-1 animated hinge infinite zoomIn"></div>
      </div>
    </div>
  );
};

export default Banner;
