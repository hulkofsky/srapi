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
          <div className="rooms-starting">
            Rooms starting from only £000.00 per month
          </div>
          <div className="row sections-and-slogan">
            <div className="col-md-5 left">
              <div className="caption">
                There was a time when the best thing to come out of Sheffield was a bunch of steel and 5 naked blokes. That time is gone. <br/><br/>
                Sheffield is emerging from it’s shadows as a cultural northern powerhouse, here’s your Future Generation guide to the best (and worst) of the steel city.
              </div>
              <div className="btn-container">
                <div className="btn discount">jump to a section</div>
                <div className="btn btn-border"></div>
              </div>
              <div className="sections">
                <div className="prefix">Jump to:</div>
                <div className="sections-list">
                  <div className="section-item">
                    Local Heroes
                  </div>
                  <div className="section-item">
                    Foodie Heaven
                  </div>
                  <div className="section-item">
                    Did you know
                  </div>
                  <div className="section-item">
                    for extroverts
                  </div>
                  <div className="section-item">
                    team mentality
                  </div>
                  <div className="section-item">
                    Local music
                  </div>
                  <div className="section-item">
                    when you’re sober
                  </div>
                  <div className="section-item rooms-section-item">
                    Oh, and the rooms
                  </div>
                </div>
                <div className="suffix">
                  Or keep scrolling. You’re your own person.
                </div>
              </div>
            </div>
            <div className="col-md-7 right d-flex align-items-md-end">
              <div className="slogan">
                feel like you know it better than a local
              </div>
            </div>
          </div>
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
