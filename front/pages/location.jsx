import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import {
  fetchCurrentLocation,
} from '../actions'
import { initStore } from '../store'
import { connect } from 'react-redux'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

class LocationPage extends React.Component {
  static async getInitialProps ({store, pathname, query}) {
    await store.dispatch(fetchCurrentLocation(query.id))
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <div className="location-page">
        <Header title="Location page" />

        <div className="hero-block">
          <div className="main-image"></div>
          <div className="main-info">
            <div className="row content-container">
              <div className="col-md-5 info">
                <div className="caption">The Steel city itself. Welcome to</div>
                <div className="city-name">sheffield</div>
              </div>
              <div className="col-md-5 offset-md-2 image">
                <img className="img-fluid" src="/static/images/FG_UI01_assets_location_hero.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="intro-block">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>

        <Footer></Footer> 
      </div>
    )
  }
}

LocationPage.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
  })
}

const mapStateToProps = (state) => {
  return {
    location: state.currentLocation
  }
}


export default connect(mapStateToProps, null)(LocationPage)
