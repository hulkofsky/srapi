import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import {
  fetchLocations,
  fetchCurrentLocation,
} from '../actions'
import { initStore } from '../store'
import { connect } from 'react-redux'
import Link from 'next/link'
import Header from '../components/Header'

class LocationPage extends React.Component {
  static async getInitialProps ({store, pathname, query}) {
    console.log(query)
    return await Promise.all([store.dispatch(fetchCurrentLocation()), store.dispatch(fetchLocations())]);
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    const { location } = this.props
    console.log(this.props)

    return (
      <div>
        <Header title="home page" />
        <h1>{location && location.item && location.item.name} page</h1>

        <Link href={{ pathname: '/' }}>
          <a>go home</a>
        </Link>
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
