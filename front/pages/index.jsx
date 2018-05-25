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

  componentDidMount() {
    window.addEventListener('scroll', this.updateRoomTypesClasses.bind(this), { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateRoomTypesClasses)
  }

  scrollToBlock(selector) {
    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth' 
    });
  }

  isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top < (window.innerHeight - 300) &&
      rect.bottom > 300
    );
  }

  updateRoomTypesClasses() {
    var images = document.querySelectorAll('.animated-image'), i;

    for (i = 0; i < images.length; ++i) {
      if (this.isElementInViewport(images[i])) {
        images[i].classList.add("scrolled-into-view");
      } else {
        images[i].classList.remove("scrolled-into-view");
      }
    }
  }

  setActiveAdvantage(index) {
    let advantagesNames = document.querySelectorAll(".roof-block .advantage-name");
    let sliderControls = document.querySelectorAll(".roof-block .slider-control");

    for (var i = 0; i < advantagesNames.length; ++i) {
      if (i !== index) {
        advantagesNames[i].classList.remove("active");
        sliderControls[i].classList.remove("active");
      } else {
        advantagesNames[i].classList.add("active");
        sliderControls[i].classList.add("active");
      }
    }
  }

  render () {
    const { locations } = this.props

    return (
      <div className="homepage">
        <Header title="home page" />

        <div className="skateboard-block">
          <div className="btn-container" onClick={() => this.scrollToBlock('.status-quo-block')}>
            <div className="btn">future generation</div>
            <div className="btn btn-border"></div>
          </div>
        </div>

        <div className="status-quo-block">
          <div className="caption">
            The status quo doesn't make great leaders <br/> or change <br/> the world.
          </div>
        </div>

        <div className="give-a-fuck-block">
          <div className="row">
            <div className="col-md-4 p0 image">
            </div>
            <div className="col-md-8 p0 quote">
              we don’t give a fuck about the status quo
            </div>
          </div>
        </div>

        <div className="keep-talking-block">
          <div className="row">
            <div className="col-md-4 p0">
              <p className="paragraph">
                We do things differently. We help you become who you want to be, not just through university but by providing a
                place which respects you. Encourages you to network, collaborate and relax for your hard work.
              </p>
              <p className="paragraph">
                This is more than your first, second or third year of Uni, this is the beginning of your success story and adult
                life. So reject the status quo, and rebuild it.
              </p>

              <div className="btn-container" onClick={() => this.scrollToBlock('.escalator-block')}>
                <div className="btn">Keep talking</div>
                <div className="btn btn-border"></div>
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

          <div className="dashes first"></div>
          <div className="dashes second"></div>
        </div>

        <div className="tour-block">
          <div className="row">
            <div className="col-md-6">
              <div className="bedroom-block">
                <img src="/static/images/bedroom.jpg" alt="bedroom" className="img-fluid animated-image bedroom" />

                <div className="text-block">
                  <div className="text">
                    Refined personal bedrooms for whatever you get up to
                  </div>
                  <div className="horizontal-line">

                  </div>
                </div>
              </div>

              <div className="kitchen-block">
                <img src="/static/images/kitchen.jpg" alt="kitchen" className="img-fluid animated-image kitchen" />

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
                <img src="/static/images/bathroom.jpg" alt="bathroom" className="img-fluid animated-image bathroom" />

                <div className="text-block">
                  <div className="text">
                    A home from home, right down to the bathrooms
                  </div>
                  <div className="horizontal-line">

                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="quote-block">
                <div className="quote">
                  This is more than your first, second or third year of Uni,
                  this is the beginning of your success story and adult life.
                  So reject the status quo, and rebuild it. With us.
                </div>

                <div className="btn-container" onClick={() => this.scrollToBlock('.just-living-block')}>
                  <div className="btn tour">Take a tour</div>
                  <div className="btn btn-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line line3"></div>

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

          <div className="row advantages-list">
            <div className="col-md-6 left">
              <div className="advantage-image"></div>
            </div>
            <div className="right">
              <div className="advantages-names">
                <div className="advantage-name active" onClick={() => this.setActiveAdvantage(0)}>
                  <svg viewBox="0 0 100 12" className="advantage-name-svg">
                    <text className="advantage-name-text" x="0" y="11">ROOFTOP SPORT</text>
                  </svg>
                </div>
                <div className="advantage-name" onClick={() => this.setActiveAdvantage(1)}>
                  <svg viewBox="0 0 100 12" className="advantage-name-svg">
                    <text className="advantage-name-text" x="0" y="11">coworking</text>
                  </svg>
                </div>
                <div className="advantage-name" onClick={() => this.setActiveAdvantage(2)}>
                  <svg viewBox="0 0 100 12" className="advantage-name-svg">
                    <text className="advantage-name-text" x="0" y="11">skyline bars</text>
                  </svg>
                </div>
                <div className="advantage-name" onClick={() => this.setActiveAdvantage(3)}>
                  <svg viewBox="0 0 100 12" className="advantage-name-svg">
                    <text className="advantage-name-text" x="0" y="11">on site cinema</text>
                  </svg>
                </div>
              </div>

              <div className="line"></div>

              <div className="available">
                <div className="available-title">Available at Loughborough, Bristol and Manchester</div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum dolore nulla quidem repellat tenetur. Cumque
                distinctio dolor dolorum expedita fugiat.
              </div>

              <div className="slider-controls">
                <div className="slider-control active" onClick={() => this.setActiveAdvantage(0)}></div>
                <div className="slider-control" onClick={() => this.setActiveAdvantage(1)}></div>
                <div className="slider-control" onClick={() => this.setActiveAdvantage(2)}></div>
                <div className="slider-control" onClick={() => this.setActiveAdvantage(3)}></div>
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
            <img src="/static/svg/samsung-logo.svg" alt="Samsung logo" className="img-fluid samsung-logo" />

            <p className="paragraph">
              This is more than your ﬁrst, second or third year of Uni, <br/>
              this is the beginning of your success story and adult life. <br/>
              So reject the status quo, and rebuild it. With us.
            </p>

            <div className="btn-orange-transparent">
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

        <div className="locations-block">
          <div className="caption-region-selector">
            <div className="row">
              <div className="paragraph col-md-6 col-lg-4">
                With over 30 locations across the country, we want there to be a location especially for you. Once you’ve found the best fit, view it’s bespoke page full of local trivia, recommendations and flat details to get you going in your new city.
              </div>
              <div className="region-selector-container col-md-6 col-lg-4 offset-lg-4 justify-content-md-end justify-content-center align-items-end d-flex">
                <div className="region-selector-prefix">Region:</div>
                <div className="region-selector">
                  <div className="selected-region">Northern England</div>
                </div>
              </div>
            </div>
          </div>

          {/*locations && locations.map((location) => (
            <div key={location.id}>
              <Link href={{ pathname: '/location', query: { id: location.id } }}>
                <a>{location.name}</a>
              </Link>
            </div>  
          ))*/}

          <div className="locations-list">
            <div className="location-item d-flex align-items-center justify-content-center type-1">
              <div className="left">
                <div className="image">
                  <img src="/static/images/FG_UI01_assets_home_location 1 main.jpg" className="img-fluid" alt="" />
                </div>
                <div className="caption">featuring the UKs first LED cinema on site</div>
              </div>
              <div className="right">
                <div className="image">
                  <img src="/static/images/FG_UI01_assets_home_location 1 detail.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="center-block">
                <Link href={{ pathname: '/location', query: { id: 1 } }}>
                  <a className="location-name">
                    Guildford
                  </a>
                </Link>
                <div className="caption">featuring the UKs first LED cinema on site</div>
              </div>
            </div>
            <div className="location-item d-flex align-items-center justify-content-center type-2">
              <div className="left">
                <div className="image">
                  <img src="/static/images/FG_UI01_assets_home_location 2 detail.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="right">
                <div className="image">
                  <img src="/static/images/FG_UI01_assets_home_location 2 main.jpg" className="img-fluid" alt="" />
                </div>
                <div className="caption">featuring the UKs first LED cinema on site</div>
              </div>
              <div className="center-block">
                <Link href={{ pathname: '/location', query: { id: 1 } }}>
                  <a className="location-name">
                    colechester
                  </a>
                </Link>
                <div className="caption">featuring the UKs first LED cinema on site</div>
              </div>
            </div>
            <div className="location-item d-flex align-items-center justify-content-center type-1">
              <div className="left">
                <div className="image">
                  <img src="/static/images/FG_UI01_assets_home_location 1 main.jpg" className="img-fluid" alt="" />
                </div>
                <div className="caption">featuring the UKs first LED cinema on site</div>
              </div>
              <div className="right">
                <div className="image">
                  <img src="/static/images/FG_UI01_assets_home_location 1 detail.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="center-block">
                <Link href={{ pathname: '/location', query: { id: 1 } }}>
                  <a className="location-name">
                    Guildford
                  </a>
                </Link>
                <div className="caption">featuring the UKs first LED cinema on site</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mailing-block text-center">
          <div className="caption">sign up to our mailing</div>
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
