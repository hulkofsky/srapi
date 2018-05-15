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

        <div className="section-4">
          <img src="/static/images/escalator.png" alt="" />
        </div>

        <div className="section-5">
          <div className="content-container">
            <div className="top-caption">
              raising the standards of student living
            </div>
            <div className="bars-container">
              <div className="left-bar"></div>
              <div className="right-bar">
                <div className="caption">
                  Every standard starts with a problem that needs solving. <br/>
                  Ours was that student housing is exactly that. <br/>
                  Housing. Nothing more. We’re creating the more.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-6">
          <div className="content-container">
            <div className="left">
              <div className="image-block">
                <img src="/static/images/FG_UI01_assets_home_bedroom.jpg" alt="" />
                <div className="bottom">
                  <div className="text">Refined personal bedrooms for whatever you get up to</div>
                </div>
              </div>
              <div className="image-block">
                <img src="/static/images/FG_UI01_assets_home_kitchen.jpg" alt="" />
                <div className="bottom">
                  <div className="text">Takeaway slaying, sleek looking, party space kitchens</div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="image-block">
                <img src="/static/images/FG_UI01_assets_home_bathroom.jpg" alt="" />
                <div className="bottom">
                  <div className="text">A home from home, right down to the bathrooms</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-7">
          <div className="just-living-block">
            <div className="football">
              We put a football pitch on your roof and a cinema in your basement.
            </div>

            <div className="left">
              <div className="quote">
                THIS ISN’T <br/>
                STUDENT LIVING. <br/>
                IT’S JUST LIVING.
              </div>
            </div>
            <div className="className"> 
              <div className="horizontal-line">
              </div>
              <div className="roof">
              </div>
            </div>
          </div>
          <div className="roof-block">
            <div className="background-quote">
              <div className="quote">
                THIS ISN’T <br>
                STUDENT LIVING. <br>
                IT’S JUST LIVING.
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="full-football"></div>
              </div>
              <div className="advantages">
                ROOFTOP SPORT
                <div className="svg-advantages-wrapper">
                  <img src="assets/svg/text.svg" alt="Advantages" className="svg-advantages">
                </div>
                <div className="line">
                </div>
                <div className="available">
                  <div className="available-title">Available at Loughborough, Bristol and Manchester</div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum dolore nulla quidem repellat tenetur. Cumque
                  distinctio dolor dolorum expedita fugiat.
                </div>
                <div className="lines"></div>
              </div>
            </div>
          </div>
        </div>

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
