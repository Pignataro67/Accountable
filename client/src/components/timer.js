import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";

  class Timer extends Component {

    myCallback = () => {
      return "Done";
    };

    render() {
        const minutes = 20;
        let pausation = false;
        const toggle = (pausation) => {
          console.log("clicked")
         if (pausation === false) {
             pausation = true;
          } else {
            pausation = false;}
        };
      };

      return (
        <div className="timer">
        <ReactCountdownClock
          seconds={60 * minutes}
          color="#232323"
          alpha={0.5}
          size={150}
          onComplete={this.myCallback}
          paused={pausation}
          weight={20}
          onClick={()=> toggle(pausation)}
        />      
        </div> 
      );
    }
  }

  export default Timer;