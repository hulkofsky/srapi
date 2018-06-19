import React, { Component } from 'react';
import threeEntryPoint from "../utils/threejs/threeEntryPoint"

class Three extends Component {
  componentDidMount() {
    if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      threeEntryPoint(this.threeRootElement);
    }
  }
  render () {
    return (
      <div className="three-container" ref={element => this.threeRootElement = element} />
    )
  }
}

export default Three