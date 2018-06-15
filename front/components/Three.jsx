import { connect } from 'react-redux';
import threeEntryPoint from "../utils/threejs/threeEntryPoint"

class Three extends React.Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }
  render () {
    return (
      <div className="three-container" ref={element => this.threeRootElement = element} />
    )
  }
}

export default  connect(null, null)(Three)