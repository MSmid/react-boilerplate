import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Helmet from 'react-helmet';

const Element = Scroll.Element;
const Link = Scroll.Link;

export class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {

    return (
      <div id="main-wrapper" className="landing-page">
        <Helmet title="Landing Page | Web App Boilerplate"/>
        <h1>LandingPage</h1>
      </div>
    );
  };
}
