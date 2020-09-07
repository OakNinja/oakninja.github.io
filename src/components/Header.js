import React from "react";
import * as Scroll from "react-scroll";
import Intro from "./Intro";

function Header(props) {
  return (
    <header id="scroll-to-top" name="scroll-to-top" className="masthead">
      <div name="home" className="container d-flex h-100 align-items-center">
        <Intro></Intro>
        <div className="button-container">
          <Scroll.Link
            smooth={true}
            duration={500}
            spy={true}
            to="about"
            className="btn-circle js-scroll-trigger"
          >
            <i className="fa fa-angle-double-down animated"></i>
          </Scroll.Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
