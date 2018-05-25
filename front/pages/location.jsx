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
              <div className="btn-orange-transparent">
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

        <div className="local-heroes">
          <div className="title">
            Local Heroes
          </div>
          <div className="items-slider heroes-list">
            <div className="item hero type-1">
              <div className="row">
                <div className="image">
                  <img className="img-fluid" src="/static/images/FG_UI01_assets_location_local 1.jpg" alt="" />
                </div>
                <div className="description">
                  <div className="line-1 name">Helen Sharman</div>
                  <div className="line-2 role">First Briton in Space</div>
                  <div className="info">
                    Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.
                  </div>
                </div>
              </div>
            </div>
            <div className="item hero type-2">
              <div className="row">
                <div className="image">
                  <img className="img-fluid" src="/static/images/FG_UI01_assets_location_local 2.jpg" alt="" />
                </div>
                <div className="description">
                  <div className="line-1 name">Helen Sharman</div>
                  <div className="line-2 role">First Briton in Space</div>
                  <div className="info">
                    Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.
                  </div>
                </div>
              </div>
            </div>
            <div className="item hero type-1">
              <div className="row">
                <div className="image">
                  <img className="img-fluid" src="/static/images/FG_UI01_assets_location_local 1.jpg" alt="" />
                </div>
                <div className="description">
                  <div className="line-1 name">Helen Sharman</div>
                  <div className="line-2 role">First Briton in Space</div>
                  <div className="info">
                    Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.
                  </div>
                </div>
              </div>
            </div>
            <div className="item hero type-2">
              <div className="row">
                <div className="image">
                  <img className="img-fluid" src="/static/images/FG_UI01_assets_location_local 2.jpg" alt="" />
                </div>
                <div className="description">
                  <div className="line-1 name">Helen Sharman</div>
                  <div className="line-2 role">First Briton in Space</div>
                  <div className="info">
                    Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-controls">
            <div className="slider-control active" onClick={() => this.setActiveLocalHero(0)}></div>
            <div className="slider-control" onClick={() => this.setActiveLocalHero(1)}></div>
            <div className="slider-control" onClick={() => this.setActiveLocalHero(2)}></div>
            <div className="slider-control" onClick={() => this.setActiveLocalHero(3)}></div>
          </div>
        </div>

        <div className="vertical-image-section foodie">
          <div className="title">Foodie Heaven</div>
          <div className="row">
            <div className="image">
              <img className="img-fluid" src="/static/images/FG_UI01_assets_location_food.jpg" alt="" />
              <div className="dashes">
                <div className="caption">
                  Great, now I’m hungry.
                </div>
              </div>
            </div>
            <div className="info">
              <div className="text">
                Sheffields food economy has exploded in the past few years. With a number of street food hubs and restraunts you’ll be able to find somewhere affordable at any time.
              </div>
              <div className="btn-orange-transparent">
                <div className="btn discount">see our favourITES</div>
                <div className="btn btn-border"></div>
              </div>
              <div className="dashes">
                <div className="caption">
                  Great, now I’m hungry.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="did-you-know">
          <div className="title">Did you know</div>
          <div className="slider-controls on-dark">
            <div className="slider-control active" onClick={() => this.setActiveDidYouKnow(0)}></div>
            <div className="slider-control" onClick={() => this.setActiveDidYouKnow(1)}></div>
            <div className="slider-control" onClick={() => this.setActiveDidYouKnow(2)}></div>
            <div className="slider-control" onClick={() => this.setActiveDidYouKnow(3)}></div>
          </div>
        </div>

        <div className="for-extrovers">
          <div className="title">
            For extroverts
          </div>
          <div className="items-slider heroes-list">
            <div className="item hero type-1">
              <div className="row">
                <div className="image">
                  <img className="img-fluid" src="/static/images/FG_UI01_assets_location_club 1.jpg" alt="" />
                </div>
                <div className="description">
                  <div className="line-1 name">Pop tarts</div>
                  <div className="line-2 role">FG rating 7.5 / 10</div>
                  <div className="info">
                    It’s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.
                    <br/><br/>
                    Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they’re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyoncé, Britney, and Chumbawumba. Simple, yet crowdpleasing.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-controls">
            <div className="slider-control active" onClick={() => this.setActiveForExtroverts(0)}></div>
            <div className="slider-control" onClick={() => this.setActiveForExtroverts(1)}></div>
            <div className="slider-control" onClick={() => this.setActiveForExtroverts(2)}></div>
            <div className="slider-control" onClick={() => this.setActiveForExtroverts(3)}></div>
          </div>
        </div>

        <div className="vertical-image-section local-music">
          <div className="title">Local Music</div>
          <div className="row">
            <div className="image">
              <img className="img-fluid" src="/static/images/FG_UI01_assets_location_music.jpg" alt="" />
              <div className="dashes">
                <div className="caption">
                  Encore.
                </div>
              </div>
            </div>
            <div className="info">
              <div className="text">
                Audiophiles rejoice. Sheffield has a great music scene from the smaller bar gigs to sell-out tour concert venues. Whatever your genre, you’re bound to find it here.
              </div>
              <div className="btn-orange-transparent">
                <div className="btn discount">see our favourITES</div>
                <div className="btn btn-border"></div>
              </div>
              <div className="dashes">
                <div className="caption">
                  Encore.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-mentality">
          <div className="title">
            team mentality
          </div>
          <div className="items-slider heroes-list">
            <div className="item hero type-1">
              <div className="row">
                <div className="image">
                  <img className="img-fluid" src="/static/images/FG_UI01_assets_location_activity 1.jpg" alt="" />
                </div>
                <div className="description">
                  <div className="line-1 name">Mixed Rowing</div>
                  <div className="info">
                    It’s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.
                    <br/><br/>
                    Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they’re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyoncé, Britney, and Chumbawumba. Simple, yet crowdpleasing.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-controls">
            <div className="slider-control active" onClick={() => this.setActiveTeamMentality(0)}></div>
            <div className="slider-control" onClick={() => this.setActiveTeamMentality(1)}></div>
            <div className="slider-control" onClick={() => this.setActiveTeamMentality(2)}></div>
            <div className="slider-control" onClick={() => this.setActiveTeamMentality(3)}></div>
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
