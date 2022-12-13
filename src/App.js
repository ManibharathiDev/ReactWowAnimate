import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Animated } from 'react-animated-css'

import WOW from "wowjs";


class App extends React.Component {

  componentDidMount() 
  {
    const wow = new WOW.WOW();
    wow.init();
  }

  render()
  {
  return (
    <div className="App">
      <header className="App-header">
      {/* <img src={logo} className="App-logo wow fadeInDown" alt="logo" /> */}
     
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        </Animated>
       
        
        <a
          className="App-link wow fadeIn" data-wow-delay="0.5s"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          Learn React
        </a>
        
      </header>
    </div>
  );
}
}

export default App;
