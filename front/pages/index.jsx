import React from 'react'
import { bindActionCreators } from 'redux'
import {
  fetchLocations,
} from '../actions'
import { initStore } from '../store'
import withRedux from '../utils/withRedux'
import HomePageContainer from '../components/HomePage'
import Header from '../components/Header'

class HomePage extends React.Component {
  static getInitialProps ({ store, isServer }) {
  }

  componentDidMount () {
    this.props.fetchLocations();
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <div>
        <Header title="Home page" />
        <HomePageContainer />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: bindActionCreators(fetchLocations, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(HomePage)
