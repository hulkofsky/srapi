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
import Footer from '../components/Footer'

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
      <div className="homepage">
        <Header title="home page" />

        <section className="top-section">
          <div className="btn-container">
            <a href="#" className="btn btn-dark">future generation</a>
          </div>
        </section> 
        <section className="section-2">
          <div className="caption">
            The status quo doesn’t make great leaders or change<br/> the world.
          </div>
        </section>
        <section className="section-3">
          <div className="left">
            <div className="image-container">
              <img src="/static/images/FG_UI01_assets_home_faded teture.jpg" alt="" />
            </div>
            <div className="caption">
              We do things differently. We help you become who you want to be, not just through university but by providing a place which respects you. Encourages you to network, collaborate and relax for your hard work.<br/><br/>
              This is more than your first, second or third year of Uni, this is the beginning of your success story and adult liffe. So reject the status quo, and rebuild it.
            </div>
            <div className="btn-container">
              <a href="#" className="btn btn-light">keep talking</a>
            </div>
          </div>
          <div className="right">
            <div className="caption">we don’t give a fuck about the status quo</div>
          </div>
        </section>

        {/*locations && locations.map((location) => (
          <div key={location.id}>
            <Link href={{ pathname: '/location', query: { id: location.id } }}>
              <a>{location.name}</a>
            </Link>
          </div>  
        ))*/}

        <Footer></Footer> 
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
