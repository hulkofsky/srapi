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

class HomePage extends React.Component {
  static async getInitialProps ({store, pathname, query}) {
    await store.dispatch(fetchLocations())
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    const { locations } = this.props

    return (
      <div>
        <Header title="home page" />
        <h1>Home page</h1>

        {locations && locations.map((location) => (
          <div key={location.id}>
            <Link href={{ pathname: '/location', query: { id: location.id } }}>
              <a>{location.name}</a>
            </Link>
          </div>  
        ))}
      </div>
    )
  }
}

HomePage.propTypes = {
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: bindActionCreators(fetchLocations, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
