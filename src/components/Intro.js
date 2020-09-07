import Parallax from "parallax-js"; // Now published on NPM
import React, { Component } from "react";

class Intro extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }
  componentWillUnmount() {
    this.parallax.disable();
  }
  render() {
    return (
      <div className="parallax-container">
        <div className="scene">
          <ul ref={(el) => (this.scene = el)}>
            <li className="layer" data-depth-x="0.90" data-depth-y="0.790">
              <img src="img/leaf_back.gif" />
            </li>
            <li className="layer" data-depth-x="-0.50" data-depth-y="-0.60">
              <img src="img/ninja.png" />
            </li>
            <li className="layer" data-depth-x="-1.90" data-depth-y="-1.90">
              <img src="img/leaf_front.gif" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Intro;
