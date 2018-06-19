import React, { Component } from 'react';
import threeFooter from "../utils/threeFooter/threeEntryPoint"
import threeRising from "../utils/threeRising/threeEntryPoint"

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      switch (this.props.objName) {
        case 'cube_rising':
          threeRising(this.threeRootElement);
          break;
        case 'cube_footer':
          threeFooter(this.threeRootElement);
          break;
      }
    }
  }
  render () {
    return (
      <div className="three-container" id={this.props.objName} ref={element => this.threeRootElement = element} />
    )
  }
}

export default Three