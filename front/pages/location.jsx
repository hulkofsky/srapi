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

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  scrollToBlock(selector) {
    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth' 
    });
  }

  render () {
    return (
      <div className="location-page">
        <Header title="Location page" />

        <div className="rooms-type-selector-trigger">
          <img className="arrow" src="/static/svg/FG_UI01_assets_arrow icon.svg" alt="" />
          <div className="caption">the rooms</div>
        </div>
        <div className="rooms-type-selector d-none">
          <div className="title">Jump to:</div>
          <div className="type-name">Classic</div>
          <div className="type-name">en suite</div>
          <div className="type-name">studio</div>
          <img className="arrow" src="/static/svg/FG_UI01_assets_arrow icon.svg" alt="" />
        </div>

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
                  <div className="section-item" onClick={() => this.scrollToBlock('.local-heroes')}>
                    Local Heroes
                  </div>
                  <div className="section-item" onClick={() => this.scrollToBlock('.foodie')}>
                    Foodie Heaven
                  </div>
                  <div className="section-item" onClick={() => this.scrollToBlock('.did-you-know')}>
                    Did you know
                  </div>
                  <div className="section-item" onClick={() => this.scrollToBlock('.for-extrovers')}>
                    for extroverts
                  </div>
                  <div className="section-item" onClick={() => this.scrollToBlock('.local-music')}>
                    team mentality
                  </div>
                  <div className="section-item" onClick={() => this.scrollToBlock('.team-mentality')}>
                    Local music
                  </div>
                  <div className="section-item" onClick={() => this.scrollToBlock('.when-sober')}>
                    when you’re sober
                  </div>
                  <div className="section-item rooms-section-item" onClick={() => this.scrollToBlock('.rooms-section')}>
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
          <div className="items-slider with-next-visible heroes-list">
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
          <div className="facts">
            <div className="fact">
              <div className="left">
                <div className="text-1">
                  From the niché sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed.
                </div>
                <div className="quote">
                  “ey up chap”
                </div>
                <div className="translation">
                  <div className="title">Translation:</div>
                  <div className="text-2">
                    “How are you? or ”are you alright?”. Whether you’re greeting someone down the local pub or just passing them in the street, ‘ey up’ is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture.
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="quote">
                  “ey up chap”
                </div>
              </div>
            </div>
          </div>
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

        <div className="when-sober">
          <div className="row title">When you’re sober</div>
          <div className="row intro-text">
            Ok so your family or friends are coming to visit for the day. What the hell are you going to do in all that time? Fotunately we’ve got a list for you to try.
          </div>
          <div className="items-slider with-next-visible">
            <div className="item type-1">
              <div className="row">
                <div className="image">
                  <img className="img-fluid" src="/static/images/FG_UI01_assets_location_sober 1.jpg" alt="" />
                </div>
                <div className="description">
                  <div className="line-1 name">Tropical Butterfly</div>
                  <div className="line-2 role">FG rating 8 / 10</div>
                  <div className="info">
                    If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.
                    <br/><br/>
                    Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it’s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!
                  </div>
                </div>
              </div>
            </div>
            <div className="item type-1">
              <div className="row">
                <div className="image">
                  <img className="img-fluid" src="/static/images/FG_UI01_assets_location_sober 2.jpg" alt="" />
                </div>
                <div className="description">
                  <div className="line-1 name">Tropical Butterfly</div>
                  <div className="line-2 role">FG rating 8 / 10</div>
                  <div className="info">
                    If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.
                    <br/><br/>
                    Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it’s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!
                  </div>
                </div>
              </div>
            </div>
            <div className="item type-1">
              <div className="row">
                <div className="image">
                  <img className="img-fluid" src="/static/images/FG_UI01_assets_location_sober 2.jpg" alt="" />
                </div>
                <div className="description">
                  <div className="line-1 name">Tropical Butterfly</div>
                  <div className="line-2 role">FG rating 8 / 10</div>
                  <div className="info">
                    If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.
                    <br/><br/>
                    Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it’s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!
                  </div>
                </div>
              </div>
            </div>
            <div className="item type-1">
              <div className="row">
                <div className="image">
                  <img className="img-fluid" src="/static/images/FG_UI01_assets_location_sober 2.jpg" alt="" />
                </div>
                <div className="description">
                  <div className="line-1 name">Tropical Butterfly</div>
                  <div className="line-2 role">FG rating 8 / 10</div>
                  <div className="info">
                    If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.
                    <br/><br/>
                    Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it’s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-controls on-dark">
            <div className="slider-control active" onClick={() => this.setActiveWhenSober(0)}></div>
            <div className="slider-control" onClick={() => this.setActiveWhenSober(1)}></div>
            <div className="slider-control" onClick={() => this.setActiveWhenSober(2)}></div>
            <div className="slider-control" onClick={() => this.setActiveWhenSober(3)}></div>
          </div>
        </div>

        <div className="rooms-section">
          <div className="title">
            oh, and the rooms
          </div>
          <div className="intro">
            And what you’re naturally here for, the rooms available in our building. We have 3 types available ranging through communal kitchen floors to private studio flats.
          </div>
          <div className="rooms-type">
            <div className="row align-items-center">
              <div className="col-md-6 room-part-name">
                classic Bedrooms
              </div>
              <div className="col-md-6 book-btn-wrapper">
                <div className="btn-dark-orange-border">
                  <div className="btn">Book ‘classic’ now</div>
                  <div className="btn btn-border"></div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="/static/images/FG_UI01_assets_location_bedroom hero.jpg" alt="" className="img-fluid" />
              <div className="text-block">
                <div className="text">
                  Pan around what could be your bedroom, come multi-million business origin story
                </div>
                <div className="horizontal-line"></div>
              </div>
            </div>
            <div className="row additional-info">
              <div className="col-md-6 images">
                <img src="/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg" alt="" className="img-fluid" />
                <img src="/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-4 offset-md-1 text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad 
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6 room-part-name">
                classic Kitchen
              </div>
              <div className="col-md-6 book-btn-wrapper">
              </div>
            </div>
            <div className="hero-image">
              <img src="/static/images/FG_UI01_assets_location_kitchen hero.jpg" alt="" className="img-fluid" />
              <div className="text-block">
                <div className="text">
                  Look around a space where you’ll revise, drink, regret drinking, and have deep conversations over pizza
                </div>
                <div className="horizontal-line"></div>
              </div>
            </div>
            <div className="row additional-info">
              <div className="col-md-6 images">
                <img src="/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg" alt="" className="img-fluid" />
                <img src="/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-4 offset-md-1 text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad 
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
