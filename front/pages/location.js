import React from 'react'
import { bindActionCreators } from 'redux'
import { fetchCurrentLocation } from '../actions'
import { initStore } from '../store'
import withRedux from '../utils/withRedux'
import LocationPageContainer from '../components/LocationPage'
import Header from '../components/Header'

class LocationPage extends React.Component {
  static getInitialProps ({query}) {
    return {
      currentLocationID: query.id
    };
  }

  componentDidMount () {
    this.props.fetchCurrentLocation(this.props.currentLocationID)
  }

  componentWillUnmount () {
  }

  render () {
    const { currentLocation } = this.props;

    return (
      <div>
        <Header title={currentLocation && currentLocation.item && currentLocation.item.name} />
        <LocationPageContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLocation: state.currentLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentLocation: bindActionCreators(fetchCurrentLocation, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(LocationPage)
