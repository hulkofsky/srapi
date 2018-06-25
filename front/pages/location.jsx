import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import {
  fetchCurrentLocation,
} from '../actions'
import { initStore } from '../store'
import { connect } from 'react-redux'
import {getLocationData} from '../actions'
import Link from 'next/link'
import withContent, { ContentFactory } from '../utils/withContent'
import Header from '../components/Header'
import Footer from '../components/Footer'
import dot from 'dot-object'

let whenSoberBlock = null
let roomTypeSelectorTrigger = null
let roomTypeSelector = null
let whenSoberBottomOffset = 0

//@withContent
class LocationPage extends React.Component {
  state = {
    roomsTypeSelectorVisible: false
  }

  // static async getInitialProps ({store, pathname, query}) {
  //   await store.dispatch(fetchCurrentLocation(query.id))
  // }

  componentDidMount() {
    whenSoberBlock = document.querySelector(".when-sober")
    roomTypeSelectorTrigger = document.querySelector(".rooms-type-selector-trigger")
    roomTypeSelector = document.querySelector(".rooms-type-selector")

    window.addEventListener('scroll', this.updateRoomTypeSelectorStyle.bind(this), { passive: true })
    window.addEventListener('resize', this.updateWhenSoberBottomOffset.bind(this))

    this.setupItemsSliders()
    this.updateWhenSoberBottomOffset()
    this.fetchLocationData('guildford');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateRoomTypeSelectorStyle)
    window.removeEventListener('resize', this.updateWhenSoberBottomOffset)
  }

  updateWhenSoberBottomOffset() {
    whenSoberBottomOffset = whenSoberBlock.offsetTop + whenSoberBlock.getBoundingClientRect().height
  }

  updateRoomTypeSelectorStyle() {
    let elementToCheck = (this.state.roomsTypeSelectorVisible ? roomTypeSelector : roomTypeSelectorTrigger)
    let roomTypeWidgetMinY = (window.scrollY + window.innerHeight / 2 + elementToCheck.clientHeight)

    if (roomTypeWidgetMinY > whenSoberBottomOffset) {
      elementToCheck.style.top = (whenSoberBottomOffset - roomTypeWidgetMinY) + window.innerHeight/2 + 'px'
    } else {
      elementToCheck.style.top = '50%'
    }
  }

  scrollToBlock(selector) {
    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth'
    });
  }

  toggleRoomsTypeSelector() {
    this.setState({roomsTypeSelectorVisible: !this.state.roomsTypeSelectorVisible})
  }

  scrollTo(element, property, to, duration) {
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }

    let start = element[property],
      change = to - start,
      currentTime = 0,
      increment = 20;

    let animateScroll = function(){
      currentTime += increment

      let val = Math.easeInOutQuad(currentTime, start, change, duration);

      element[property] = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  getElementWidth(element) {
    let style = element.currentStyle || window.getComputedStyle(element),
      width = element.offsetWidth,
      margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight),
      padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),
      border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)

    return (width + margin + padding + border)
  }

  setActiveSlide(slider, nextActiveSlideIndex) {
    let pxToScroll = 0

    if ((nextActiveSlideIndex < 0) || (nextActiveSlideIndex > slider.controls.length - 1)) {
      return false
    }

    slider.controls.map((control, controlIndex) => {
      control.classList.remove('active')

      if (controlIndex == nextActiveSlideIndex) {
        control.classList.add('active')
        slider.activeSlideIndex = nextActiveSlideIndex

        this.scrollTo(slider, 'scrollLeft', pxToScroll, 500)
      }

      pxToScroll += this.getElementWidth(slider.slides[controlIndex])
    })
  }

  setupItemsSliders() {
    let sliders = Array.prototype.slice.call(document.querySelectorAll(".items-slider"))

    sliders.map((slider) => {
      let controlsContainerNodes = slider.parentNode.getElementsByClassName("slider-controls")
      let controls = Array.prototype.slice.call(controlsContainerNodes[0].getElementsByClassName("slider-control"))
      let slides = Array.prototype.slice.call(slider.getElementsByClassName("item"))

      slider.controls = controls
      slider.slides = slides

      controls.map((control, index) => {
        control.addEventListener("click", this.setActiveSlide.bind(this, slider, index))

        if (control.classList.contains('active')) {
          slider.activeSlideIndex = index
        }
      })

      slider.addEventListener('touchstart', (e) => {
        slider.touchLastX = e.touches[0].clientX
      })

      slider.addEventListener('touchend', (e) => {
        let deltaX = -1 * (e.changedTouches[0].clientX - slider.touchLastX)

        if (deltaX > 70) {
          this.setActiveSlide(slider, slider.activeSlideIndex + 1)
        }

        if (deltaX < -70) {
          this.setActiveSlide(slider, slider.activeSlideIndex - 1)
        }
      })
    })
  }

  scrollToRooms(selector) {
    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth'
    })
  }

  fetchLocationData (pagename) {  
    fetch(`http://localhost:1337/dottable?pagename=${pagename}&_limit=500`)
    .then((res) => {
      if (!res.status || res.status !== 200) {
        return Promise.reject(new Error('Unable to connect to the CMS'));
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      let objectArray=[];
      data.forEach((item, i)=>{
        objectArray[i] = {
          pagename: item.pagename  
        };
        dot.str(item.fieldname, item.content, objectArray[i]);
      })
      this.props.getLocationData(objectArray);
    });
  };

  render() {
    const {content} = this.props;
    const Content = ContentFactory(true);
    

    console.log(this.props.locationData.locationData, 'props na hui suka bliat');
    
    if(!this.props.locationData.locationData[0]) {
      return(<div className="when-sober">
              <div className="rooms-type-selector-trigger"></div>
              <div className="rooms-type-selector"></div>
            </div>)
      } else {
      return (
        <div className="location-page">
          <Header title="Location page" />
  
          <div className={['rooms-type-selector-trigger', (this.state.roomsTypeSelectorVisible ? 'd-none' : '')].join(' ')} onClick={() => this.toggleRoomsTypeSelector()}>
            <img className="arrow" src="/static/svg/FG_UI01_assets_arrow icon.svg" alt="" />
            <div className="key">
              <img src="/static/svg/FG_UI01_assets_key icon.svg" />
            </div>
            <div className="caption">the rooms</div>
          </div>
          <div className={['rooms-type-selector', (this.state.roomsTypeSelectorVisible ? '' : 'd-none')].join(' ')}>
            <div className="title">Jump to:</div>
            <div className="type-name" onClick={() => this.scrollToRooms("#rooms-list-classic")}>Classic</div>
            <div className="type-name" onClick={() => this.scrollToRooms("#rooms-list-classic")}>en suite</div>
            <div className="type-name" onClick={() => this.scrollToRooms("#rooms-list-classic")}>studio</div>
            <img className="arrow" src={this.props.locationData.locationData[2].header.photo} alt="" onClick={() => this.toggleRoomsTypeSelector()} />
            {/* "/static/svg/FG_UI01_assets_arrow icon.svg" */}
          </div>
  
          <div className="hero-block">
            <div className="main-image"></div>
            <div className="main-info">
              <div className="row content-container">
                <div className="col-md-5 info">
                  <div className="caption">
                    {this.props.locationData.locationData[41].header.title}
                    {/* The Steel city itself. Welcome to */}
                  </div> 
                  <div className="city-name">{this.props.locationData.locationData[0].pagename}{/*Content(content.location_title)*/}</div>
                </div>
                <div className="col-md-5 offset-md-2 image">
                  <img className="img-fluid" src={this.props.locationData.locationData[2].header.photo} alt="" />
                  {/* "/static/svg/FG_UI01_assets_arrow icon.svg" */}
                </div>
              </div>
            </div>
          </div>
  
          <div className="intro-block">
            <div className="rooms-starting">
              {this.props.locationData.locationData[3].rooms.title}
              {/* Rooms starting from only £000.00 per month */}
            </div>
            <div className="row sections-and-slogan">
              <div className="col-md-5 left">
                <div className="caption">
                  {this.props.locationData.locationData[4].rooms.description}
                  {/* There was a time when the best thing to come out of Sheffield was a bunch of steel and 5 naked blokes. That time is gone. <br/><br/>
                  Sheffield is emerging from it’s shadows as a cultural northern powerhouse, here’s your Future Generation guide to the best (and worst) of the steel city. */}
                </div>
                <div className="btn-orange-transparent">
                  <div className="btn discount">jump to a section</div>
                  <div className="btn btn-border"></div>
                </div>
                <div className="sections">
                  <div className="prefix">Jump to:</div>
                  <div className="sections-list">
                    <div className="section-item" onClick={() => this.scrollToBlock('.local-heroes')}>
                      {this.props.locationData.locationData[5].heroes.title}
                      {/* Local Heroes */}
                    </div>
                    <div className="section-item" onClick={() => this.scrollToBlock('.foodie')}>
                      {this.props.locationData.locationData[20].food.title}
                      {/* Foodie Heaven */}
                    </div>
                    <div className="section-item" onClick={() => this.scrollToBlock('.did-you-know')}>
                      {this.props.locationData.locationData[24].diduknow.title}
                      {/* Did you know */}
                    </div>
                    <div className="section-item" onClick={() => this.scrollToBlock('.for-extrovers')}>
                      {this.props.locationData.locationData[38].extroverts.tittle}
                      {/* for extroverts */}
                    </div>
                    <div className="section-item" onClick={() => this.scrollToBlock('.local-music')}>
                      {this.props.locationData.locationData[58].mentality.title}
                      {/* team mentality */}
                    </div>
                    <div className="section-item" onClick={() => this.scrollToBlock('.team-mentality')}>
                      {this.props.locationData.locationData[60].music.title}
                      {/* Local music */}
                    </div>
                    <div className="section-item" onClick={() => this.scrollToBlock('.when-sober')}>
                      {this.props.locationData.locationData[74].sober.title}
                      {/* when you’re sober */}
                    </div>
                    <div className="section-item rooms-section-item" onClick={() => this.scrollToBlock('.rooms-section')}>
                      {this.props.locationData.locationData[100].theRooms.title}
                      {/* Oh, and the rooms */}
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
              {this.props.locationData.locationData[5].heroes.title}
              {/* Local Heroes */}
            </div>
            <div className="items-slider with-next-visible heroes-list">
              <div className="item hero type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img src={this.props.locationData.locationData[0].heroes.hero1.photo} className="img-fluid" alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[0].heroes.hero1.photo})`}}>
                    {/* {"/static/images/FG_UI01_assets_location_local 1.jpg"} */}
                    </div>
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {/* Helen Sharman */}
                      {this.props.locationData.locationData[6].heroes.hero1.name}
                    </div>
                    <div className="line-2 role">
                      {this.props.locationData.locationData[7].heroes.hero1.heading}
                      {/* First Briton in Space */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[8].heroes.hero1.description}
                      {/* Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet. */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item hero type-2">
                <div className="row">
                  <div className="image-wrapper">
                    <img src={this.props.locationData.locationData[1].heroes.hero2.photo} className="img-fluid" alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[1].heroes.hero2.photo})`}}>
                    {/* "/static/images/FG_UI01_assets_location_local 2.jpg" */}
                    </div>
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[9].heroes.hero2.name}
                      {/* Helen Sharman */}
                    </div>
                    <div className="line-2 role">
                      {this.props.locationData.locationData[10].heroes.hero2.heading}
                      {/* First Briton in Space */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[12].heroes.hero2.description}
                      {/* Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet. */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item hero type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img src={this.props.locationData.locationData[11].heroes.hero3.photo} className="img-fluid" alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[11].heroes.hero3.photo})`}}>
                    {/* "/static/images/FG_UI01_assets_location_local 1.jpg" */}
                    </div>
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[13].heroes.hero3.name}
                      {/* Helen Sharman */}
                    </div>
                    <div className="line-2 role">
                      {this.props.locationData.locationData[14].heroes.hero3.heading}
                      {/* First Briton in Space */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[15].heroes.hero3.description}
                      {/* Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet. */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item hero type-2">
                <div className="row">
                  <div className="image-wrapper">
                    <img src={this.props.locationData.locationData[19].heroes.hero4.photo} className="img-fluid" alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[19].heroes.hero4.photo})`}}>
                    {/* "/static/images/FG_UI01_assets_location_local 2.jpg" */}
                    </div>
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[16].heroes.hero4.name}
                      {/* Helen Sharman */}
                    </div>
                    <div className="line-2 role">
                      {this.props.locationData.locationData[17].heroes.hero4.heading}
                      {/* First Briton in Space */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[18].heroes.hero4.description}
                      {/* Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet. */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-controls">
              <div className="slider-control active"></div>
              <div className="slider-control"></div>
              <div className="slider-control"></div>
              <div className="slider-control"></div>
            </div>
          </div>
  
          <div className="vertical-image-section foodie">
            <div className="title">
              {this.props.locationData.locationData[20].food.title}
              {/* Foodie Heaven */}
            </div>
            <div className="row">
              <div className="image">
                <img className="img-fluid" src={this.props.locationData.locationData[21].food.photo} alt="" />
                {/* "/static/images/FG_UI01_assets_location_food.jpg" */}
                <div className="dashes">
                  <div className="caption">
                  {this.props.locationData.locationData[23].food.quote}
                    {/* Great, now I’m hungry. */}
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="text">
                {this.props.locationData.locationData[22].food.description}
                  {/* Sheffields food economy has exploded in the past few years. With a number of street food hubs and restraunts you’ll be able to find somewhere affordable at any time. */}
                </div>
                <div className="btn-orange-transparent">
                  <div className="btn discount">see our favourITES</div>
                  <div className="btn btn-border"></div>
                </div>
                <div className="dashes">
                  <div className="caption">
                    {this.props.locationData.locationData[23].food.quote}
                    {/* Great, now I’m hungry. */}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="did-you-know">
            <div className="title">
              {this.props.locationData.locationData[24].diduknow.title}
              {/* Did you know */}
            </div>
            <div className="intro">
              {this.props.locationData.locationData[25].diduknow.description}
              {/* From the niché sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed. */}
            </div>
            <div className="items-slider facts">
              <div className="item fact">
                <div className="left">
                  <div className="quote">
                  {this.props.locationData.locationData[26].diduknow.chap1.title}
                    {/* “ey up chap” */}
                  </div>
                  <div className="translation">
                    <div className="title">
                      {this.props.locationData.locationData[27].diduknow.chap1.heading}
                      {/* Translation: */}
                    </div>
                    <div className="text-2">
                    {this.props.locationData.locationData[29].diduknow.chap1.description}
                      {/* “How are you? or ”are you alright?”. Whether you’re greeting someone down the local pub or just passing them in the street, ‘ey up’ is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture. */}
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="quote">
                  {this.props.locationData.locationData[26].diduknow.chap1.title}
                    {/* “ey up chap” */}
                  </div>
                </div>
              </div>
              <div className="item fact">
                <div className="left">
                  <div className="quote">
                    {this.props.locationData.locationData[34].diduknow.chap2.title}
                    
                    {/* “ey up chap 1” */}
                  </div>
                  <div className="translation">
                    <div className="title">
                      {this.props.locationData.locationData[28].diduknow.chap2.heading}
                      {/* Translation: */}
                    </div>
                    <div className="text-2">
                      {this.props.locationData.locationData[32].diduknow.chap2.description}
                      {/* “How are you? or ”are you alright?”. Whether you’re greeting someone down the local pub or just passing them in the street, ‘ey up’ is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture. 1 */}
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="quote">
                    {this.props.locationData.locationData[34].diduknow.chap2.title}
                    {/* “ey up chap 1” */}
                  </div>
                </div>
              </div>
              <div className="item fact">
                <div className="left">
                  <div className="quote">
                    {this.props.locationData.locationData[35].diduknow.chap3.title}
                    
                    {/* “ey up chap 2” */}
                  </div>
                  <div className="translation">
                    <div className="title">
                    {this.props.locationData.locationData[31].diduknow.chap3.heading}
                      {/* Translation: */}
                    </div>
                    <div className="text-2">
                      {this.props.locationData.locationData[36].diduknow.chap3.description}
                      
                      {/* “How are you? or ”are you alright?”. Whether you’re greeting someone down the local pub or just passing them in the street, ‘ey up’ is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture. 2 */}
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="quote">
                    {this.props.locationData.locationData[35].diduknow.chap3.title}
                    
                    {/* “ey up chap 2” */}
                  </div>
                </div>
              </div>
              <div className="item fact">
                <div className="left">
                  <div className="quote">
                    {this.props.locationData.locationData[33].diduknow.chap4.title}
                    
                    {/* “ey up chap 3” */}
                  </div>
                  <div className="translation">
                    <div className="title">
                    {this.props.locationData.locationData[30].diduknow.chap4.heading}
                      {/* Translation: */}
                    </div>
                    <div className="text-2">
                    {this.props.locationData.locationData[37].diduknow.chap4.description}
                    
                      {/* “How are you? or ”are you alright?”. Whether you’re greeting someone down the local pub or just passing them in the street, ‘ey up’ is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture. 3 */}
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="quote">
                    {this.props.locationData.locationData[33].diduknow.chap4.title}
                  
                    {/* “ey up chap 3” */}
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-controls on-dark">
              <div className="slider-control active"></div>
              <div className="slider-control"></div>
              <div className="slider-control"></div>
              <div className="slider-control"></div>
            </div>
          </div>
  
          <div className="for-extrovers">
            <div className="title">
              {this.props.locationData.locationData[38].extroverts.tittle}      
              {/* For extroverts */}
            </div>
            <div className="items-slider for-extrovers-list with-next-visible">
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[55].extroverts.post1.photo} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[54].extroverts.post2.photo})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_club 1.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[39].extroverts.post1.title}
                    
                      {/* Pop tarts */}
                    </div>
                    <div className="line-2 role">
                      {this.props.locationData.locationData[40].extroverts.post1.heading}
                      {/* FG rating 7.5 / 10 */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[42].extroverts.post1.description}
                      {/* It’s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts. */}
                      {/* <br/><br/> */}
                      {/* Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they’re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyoncé, Britney, and Chumbawumba. Simple, yet crowdpleasing. */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[54].extroverts.post2.photo} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[54].extroverts.post2.photo})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_club 1.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                    {this.props.locationData.locationData[43].extroverts.post2.title}
                      {/* Pop tarts */}
                    </div>
                    <div className="line-2 role">
                    {this.props.locationData.locationData[44].extroverts.post2.heading}
                      {/* FG rating 7.5 / 10 */}
                    </div>
                    <div className="info">
                    {this.props.locationData.locationData[45].extroverts.post2.descriptions}
                      {/* It’s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.
                      <br/><br/>
                      Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they’re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyoncé, Britney, and Chumbawumba. Simple, yet crowdpleasing. */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[53].extroverts.post3.photo} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[53].extroverts.post3.photo})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_club 1.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[46].exrtroverts.post3.title}
                      {/* Pop tarts */}
                    </div>
                    <div className="line-2 role">
                    {this.props.locationData.locationData[47].extroverts.post3.heading}
                      {/* FG rating 7.5 / 10 */}
                    </div>
                    <div className="info">
                    {this.props.locationData.locationData[48].extroverts.post3.description}
                      {/* It’s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.
                      <br/><br/>
                      Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they’re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyoncé, Britney, and Chumbawumba. Simple, yet crowdpleasing. */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[52].extroverts.post4.photo} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[52].extroverts.post4.photo})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_club 1.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                    {this.props.locationData.locationData[49].extroverts.post4.title}
                      {/* Pop tarts */}
                    </div>
                    <div className="line-2 role">
                    {this.props.locationData.locationData[50].extroverts.post4.heading}
                      {/* FG rating 7.5 / 10 */}
                    </div>
                    <div className="info">
                    {this.props.locationData.locationData[57].extroverts.post4.description}
                      {/* It’s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.
                      <br/><br/>
                      Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they’re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyoncé, Britney, and Chumbawumba. Simple, yet crowdpleasing. */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-controls">
              <div className="slider-control active"></div>
              <div className="slider-control"></div>
              <div className="slider-control"></div>
              <div className="slider-control"></div>
            </div>
          </div>
  
          <div className="vertical-image-section local-music">
            <div className="title">
              {this.props.locationData.locationData[60].music.title}
              {/* Local Music */}
            </div>
            <div className="row">
              <div className="image">
                <img className="img-fluid" src={this.props.locationData.locationData[62].music.photo} alt="" />
                {/* "/static/images/FG_UI01_assets_location_music.jpg" */}
                <div className="dashes">
                  <div className="caption">
                    {this.props.locationData.locationData[63].music.encore}
                    {/* Encore. */}
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="text">
                  {this.props.locationData.locationData[61].music.description}
                  {/* Audiophiles rejoice. Sheffield has a great music scene from the smaller bar gigs to sell-out tour concert venues. Whatever your genre, you’re bound to find it here. */}
                </div>
                <div className="btn-orange-transparent">
                  <div className="btn discount">see our favourITES</div>
                  <div className="btn btn-border"></div>
                </div>
                <div className="dashes">
                  <div className="caption">
                    {this.props.locationData.locationData[63].music.encore}
                    {/* Encore. */}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="team-mentality">
            <div className="title">
            {this.props.locationData.locationData[58].mentality.title}
              {/* team mentality */}
            </div>
            <div className="items-slider with-next-visible">
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[59].mentality.post1.photo} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[59].mentality.post1.photo})`}}></div>
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[71].mentality.post1.title}
                      {/* Mixed Rowing */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[65].mentality.post1.description}
                      {/* It’s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.
                      <br/><br/>
                      Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they’re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyoncé, Britney, and Chumbawumba. Simple, yet crowdpleasing. */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[66].mentality.post2.photo} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[65].mentality.post1.description})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_activity 1.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[70].mentality.post2.title}
                      {/* Mixed Rowing */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[67].mentality.post2.description}
                      {/* It’s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.
                      <br/><br/>
                      Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they’re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyoncé, Britney, and Chumbawumba. Simple, yet crowdpleasing. */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[51].mentality.post3.photo} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[51].mentality.post3.photo})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_activity 1.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[64].mentality.post3.title}
                      {/* Mixed Rowing */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[69].mentality.post3.description}
                      {/* It’s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.
                      <br/><br/>
                      Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they’re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyoncé, Britney, and Chumbawumba. Simple, yet crowdpleasing. */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[56].mentality.post4.photo} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[56].mentality.post4.photo})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_activity 1.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[73].mentality.post4.title}
                      {/* Mixed Rowing */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[72].mentality.post4.description}
                      {/* It’s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.
                      <br/><br/>
                      Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they’re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyoncé, Britney, and Chumbawumba. Simple, yet crowdpleasing. */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-controls">
              <div className="slider-control active"></div>
              <div className="slider-control"></div>
              <div className="slider-control"></div>
              <div className="slider-control"></div>
            </div>
          </div>
  
          <div className="when-sober">
            <div className="row title">
              {this.props.locationData.locationData[74].sober.title}
              {/* When you’re sober */}
            </div>
            <div className="row intro-text">
              {this.props.locationData.locationData[81].sober.heading}
              {/* Ok so your family or friends are coming to visit for the day. What the hell are you going to do in all that time? Fotunately we’ve got a list for you to try. */}
            </div>
            <div className="items-slider when-sober-list with-next-visible">
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[92].sober.post1.photo} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[92].sober.post1.photo})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_sober 1.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[68].sober.post1.title}
                      {/* Tropical Butterfly */}
                      </div>
                    <div className="line-2 role">
                      {this.props.locationData.locationData[79].sober.post1.heading}
                      {/* FG rating 8 / 10 */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[87].sober.post1.description}
                      {/* If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.
                      <br/><br/>
                      Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it’s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House! */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[96].sober.post1.photo2} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[96].sober.post1.photo2})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_sober 2.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[80].sober.post2.title}
                      {/* Tropical Butterfly */}
                    </div>
                    <div className="line-2 role">
                      {this.props.locationData.locationData[78].sober.post2.heading}
                      {/* FG rating 8 / 10 */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[88].sober.post2.description}
                      {/* If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.
                      <br/><br/>
                      Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it’s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House! */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[92].sober.post1.photo} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[92].sober.post1.photo})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_sober 1.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[75].sober.post3.title}
                      {/* Tropical Butterfly */}
                    </div>
                    <div className="line-2 role">
                      {this.props.locationData.locationData[77].sober.post3.heading}
                      {/* FG rating 8 / 10 */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[89].sober.post3.description}
                      {/* If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.
                      <br/><br/>
                      Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it’s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House! */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item type-1">
                <div className="row">
                  <div className="image-wrapper">
                    <img className="img-fluid" src={this.props.locationData.locationData[96].sober.post1.photo2} alt="" />
                    <div className="image" style={{backgroundImage: `url(${this.props.locationData.locationData[96].sober.post1.photo2})`}}></div>
                    {/* "/static/images/FG_UI01_assets_location_sober 2.jpg" */}
                  </div>
                  <div className="description">
                    <div className="line-1 name">
                      {this.props.locationData.locationData[76].sober.post4.title}
                      {/* Tropical Butterfly */}
                    </div>
                    <div className="line-2 role">
                      {this.props.locationData.locationData[86].sober.post4.heading}
                      {/* FG rating 8 / 10 */}
                    </div>
                    <div className="info">
                      {this.props.locationData.locationData[90].sober.post4.description}
                      {/* If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.
                      <br/><br/>
                      Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it’s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House! */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-controls on-dark">
              <div className="slider-control active"></div>
              <div className="slider-control"></div>
              <div className="slider-control"></div>
              <div className="slider-control"></div>
            </div>
          </div>
  
          <div className="rooms-section">
            <div className="title">
              {this.props.locationData.locationData[100].theRooms.title}
              {/* oh, and the rooms */}
            </div>
            <div className="intro">
              {this.props.locationData.locationData[101].theRooms.description1}
              {/* And what you’re naturally here for, the rooms available in our building. We have 3 types available ranging through communal kitchen floors to private studio flats. */}
            </div>
            <div className="rooms-type">
              <div className="row align-items-center">
                <div className="col-md-6 room-part-name" id="rooms-list-classic">
                  {this.props.locationData.locationData[102].theRooms.heading1}
                  {/* classic Bedrooms */}
                </div>
                <div className="col-md-6 book-btn-wrapper">
                  <div className="btn-dark-orange-border">
                    <div className="btn">Book</div>
                    <div className="btn btn-border"></div>
                  </div>
                </div>
              </div>
              <div className="hero-image bedroom">
                <img src={this.props.locationData.locationData[103].theRooms.bigPhoto} alt="" className="img-fluid" />
                {/* "/static/images/FG_UI01_assets_location_bedroom hero.jpg" */}
              </div>
              <div className="text-block">
                <div className="text">
                  {this.props.locationData.locationData[104].theRooms.photoDesc}
                  {/* Pan around what could be your bedroom, come multi-million business origin story */}
                </div>
                <div className="horizontal-line"></div>
              </div>
              <div className="row additional-info">
                <div className="col-md-6 images">
                  <img src={this.props.locationData.locationData[84].theRooms.photoSmall3} alt="" className="img-fluid" />
                  {/* "/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg" */}
                  <img src={this.props.locationData.locationData[85].theRooms.photoSmall4} alt="" className="img-fluid" />
                  {/* "/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg" */}
                </div>
                <div className="col-md-4 offset-md-1 text">
                  {this.props.locationData.locationData[91].theRooms.description3}
                  {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad */}
                </div>
              </div>
  
              <div className="row align-items-center">
                <div className="col-md-6 room-part-name">
                  {this.props.locationData.locationData[107].theRooms.Heading2}
                  {/* classic Kitchen */}
                </div>
                <div className="col-md-6 book-btn-wrapper">
                </div>
              </div>
              <div className="hero-image kitchen">
                <img src={this.props.locationData.locationData[82].theRooms.bigPhoto2} alt="" className="img-fluid" />
                {/* "/static/images/FG_UI01_assets_location_kitchen hero.jpg" */}
              </div>
              <div className="text-block">
                <div className="text">
                  {this.props.locationData.locationData[83].theRooms.photoDesc}
                  {/* Look around a space where you’ll revise, drink, regret drinking, and have deep conversations over pizza */}
                </div>
                <div className="horizontal-line"></div>
              </div>
              <div className="row additional-info">
                <div className="col-md-6 images">
                  <img src={this.props.locationData.locationData[105].theRooms.photoSmall1} alt="" className="img-fluid" />
                  {/* "/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg" */}
                  <img src={this.props.locationData.locationData[106].theRooms.photoSmall2} alt="" className="img-fluid" />
                  {/* "/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg" */}
                </div>
                <div className="col-md-4 offset-md-1 text">
                  {this.props.locationData.locationData[108].theRooms.description2}
                  {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad */}
                </div>
              </div>
            </div>
          </div>
  
          <Footer></Footer>
        </div>
      )
    }
    
    
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
    location: state.currentLocation,
    locationData: state.locationData
  }
}

const matchDispatchToProps =  (dispatch) => {
  return bindActionCreators({getLocationData: getLocationData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LocationPage);
