import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import {
  fetchLocations,
} from '../actions'
import { initStore } from '../store'
import { connect } from 'react-redux'
import Link from 'next/link'
import Header from '../components/Header'
import MailingBlock from '../components/MailingBlock'
import LocationsList from '../components/LocationsList'
import Footer from '../components/Footer'

class LocationsPage extends React.Component {
  static async getInitialProps ({store, pathname, query}) {
    await store.dispatch(fetchLocations())
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="locations-page">
        <Header title="Locations page" />

        <div className="main-caption">
          <div className="text-wrapper">
            no more boring student buildings. lots more choice.
          </div>
        </div>

        <LocationsList></LocationsList>

        <MailingBlock></MailingBlock>

        <Footer></Footer> 
      </div>
    )
  }
}

LocationsPage.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.string,
    })
  )
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.items
  }
}

export default connect(mapStateToProps, null)(LocationsPage)
