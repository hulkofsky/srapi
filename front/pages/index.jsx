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

        {/*locations && locations.map((location) => (
          <div key={location.id}>
            <Link href={{ pathname: '/location', query: { id: location.id } }}>
              <a>{location.name}</a>
            </Link>
          </div>  
        ))*/}

        <nav className="nav">
          <img className="logo" src="/static/svg/logo.svg" alt="logo" />
          <img className="burger" src="/static/svg/burger.svg" alt="burger" />
        </nav>

        <div className="skateboard-block">
          <div className="btn-container">
            <div className="btn">future generation</div>
            <div className="btn btn-border"></div>
          </div>
        </div>

        <div className="status-quo-block">
          <div className="row">
            <div className="col-md-9">
              The status quo doesn't make great leaders <br/> or change <br/> the world.
            </div>
          </div>
        </div>

        <div className="line">

        </div>

        <div className="give-a-fuck-block">
          <div className="row">
            <div className="col-md-4 image">
            </div>
            <div className="col-md-8 quote">
              we don’t give a fuck about the status quo
            </div>
          </div>
        </div>

        <div className="keep-talking-block">
          <div className="row">
            <div className="col-md-4">
              <p className="paragraph">
                We do things differently. We help you become who you want to be, not just through university but by providing a
                place which respects you. Encourages you to network, collaborate and relax for your hard work.
              </p>
              <p className="paragraph">
                This is more than your first, second or third year of Uni, this is the beginning of your success story and adult
                life. So reject the status quo, and rebuild it.
              </p>

              <div className="btn-container">
                <div className="btn">Keep talking</div>
                <div className="btn btn-border"></div>
              </div>

            </div>
            <div className="col-md-8">
              <div className="line line2">

              </div>
            </div>
          </div>
        </div>

        <div className="escalator-block">
          <div className="row">
            <div className="escalator-image">

            </div>
          </div>
        </div>

        <div className="rising-standarts-block">
          <div className="quote">
            RAISING THE STANDARDS OF STUDENT LIVING
          </div>

          <div className="text">
            Every standard starts with a problem that needs solving. <br/>
            Ours was that student housing is exactly that. <br/>
            Housing. Nothing more. We’re creating the more.
          </div>
        </div>

        <div className="tour-block">
          <div className="row">
            <div className="col-md-6">
              <div className="bedroom-block">
                <img src="/static/images/bedroom.jpg" alt="bedroom" className="bedroom" />

                <div className="text-block">
                  <div className="text">
                    Refined personal bedrooms for whatever you get up to
                  </div>
                  <div className="horizontal-line">

                  </div>
                </div>
              </div>

              <div className="kitchen-block">
                <img src="/static/images/kitchen.jpg" alt="kitchen" className="kitchen" />

                <div className="text-block">
                  <div className="text">
                    Takeaway slaying, sleek looking, party space kitchens
                  </div>
                  <div className="horizontal-line">

                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-6">
              <div className="bathroom-block">
                <img src="/static/images/bathroom.jpg" alt="bathroom" className="bathroom" />

                <div className="text-block">
                  <div className="text">
                    A home from home, right down to the bathrooms
                  </div>
                  <div className="horizontal-line">

                  </div>
                </div>
              </div>

              <div className="quote-block">
                <div className="line">

                </div>
                <div className="quote">
                  This is more than your first, second or third year of Uni,
                  this is the beginning of your success story and adult life.
                  So reject the status quo, and rebuild it. With us.
                </div>

                <div className="btn-container">
                  <div className="btn tour">Take a tour</div>
                  <div className="btn btn-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line line3">

        </div>

        <div className="just-living-block">
          <div className="football">
            We put a football pitch on your roof and a cinema in your basement.
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className="quote">
                THIS ISN’T <br/>
                STUDENT LIVING. <br/>
                IT’S JUST LIVING.
              </div>
            </div>
            <div className="col-md-3">
              <div className="horizontal-line">

              </div>

              <div className="roof">

              </div>
            </div>
          </div>
        </div>

        <div className="roof-block">
          <div className="background-quote">
            <div className="quote">
              THIS ISN’T <br/>
              STUDENT LIVING. <br/>
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
                <img src="/static/svg/text.svg" alt="Advantages" className="svg-advantages" />
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

        <div className="partner-block">
          <div className="ellipse-bg">

          </div>
          <div className="title">
            YOU’LL GET 25% OFF OUR PARTNER’S TECH
          </div>

          <div className="wrapper">
            <img src="/static/svg/samsung-logo.svg" alt="Samsung logo" className="samsung-logo" />

            <p className="paragraph">
              This is more than your ﬁrst, second or third year of Uni, <br/>
              this is the beginning of your success story and adult life. <br/>
              So reject the status quo, and rebuild it. With us.
            </p>

            <div className="btn-container">
              <div className="btn discount">Get 25% off</div>
              <div className="btn btn-border"></div>
            </div>

            <img src="/static/images/small-bedroom.jpg" alt="bedroom" className="partner-block-image" />

            <div className="text-block">
              <div className="text">
                Pixel perfect TVs and other tech integration in your spaces
              </div>
              <div className="horizontal-line">

              </div>
            </div>
          </div>
        </div>

        <div className="leap-block">
          <div className="quote-line quote-line-one">
            TAKE THIS STEP
          </div>
          <div className="quote-line quote-line-two">
            TO MAKE YOUR LEAP
          </div>
        </div>

        <div className="colechester">
          <p className="paragraph col-md-4">
            This is more than your ﬁrst, second or third year of Uni, <br/>
            this is the beginning of your success story and adult life.
            So reject the status quo, and rebuild it. With us.
          </p>

          <div className="places">
            <div className="place">COLECHESTER</div>
            <div className="place">SHEFFIELD</div>
            <div className="place">GUILDFORD</div>
            <div className="place">NOTTINGHAM</div>
            <div className="place">LOUGHBOROUGH</div>
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
