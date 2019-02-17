// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './../components/Global/Header';
import Content from './../components/Global/Content';

// Assets
import './../components/css/App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Header></Header>
        <Content body={children}></Content>
      </div>
    );
  }
}

export default App;
