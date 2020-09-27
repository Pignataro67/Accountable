import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";

  class Timer extends Component {

    constructor(){
      super()
      this.state = {
        pausation: false
      }
    }

    myCallback = () => {
      return "Done";
    };

    toggle = (pausation) => {
      this.setState({
        pausation: !this.state.pausation
      })
   };

    render() {
      const minutes = 20;
        
      return (
        <div className="timer">
        <ReactCountdownClock
          seconds={60 * minutes}
          color="#232323"
          alpha={0.5}
          size={150}
          onComplete={this.myCallback}
          paused={this.state.pausation}
          weight={20}
        />
        <div>      
        </div>
      );
    }
  }

  export default Timer;