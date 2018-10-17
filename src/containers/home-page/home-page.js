import React, { Component } from 'react';
import { UpdatesSection, KeyMoments } from '../index';

import './styles.css';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <UpdatesSection />
        <KeyMoments />
      </div>
    );
  }
}

export default HomePage;
