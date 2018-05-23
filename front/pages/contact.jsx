import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'

class ContactPage extends React.Component {
  static async getInitialProps ({store, pathname, query}) {
  }

  render () {
    return (
      <div className="contact">
        <Header title="Contact" />

        <div className="caption">
          strike up <br/>
          a conversation. <br/>
          we’re fluent in <br/>
          guidance, pleasentaries <br/>
          and a bit of humour
        </div>

        <div className="row m-0 contact-info">
          <div className="col-lg-6 text-center text-lg-left mb-5 mb-lg-0">
            Support<br/>
            <a href="tel:+4402037727111">+44 (0) 20 3772 7111</a><br/>
            <a href="mailto:Support@futuregeneration.com">Support@futuregeneration.com</a><br/>
          </div>
          <div className="col-lg-6 text-center text-lg-left">
            Sales<br/>
            <a href="tel:+4402037727111">+44 (0) 20 3772 7111</a><br/>
            <a href="mailto:Sales@futuregeneration.com">Sales@futuregeneration.com</a><br/>
          </div>
        </div>

        <Footer></Footer> 
      </div>
    )
  }
}

export default connect(null, null)(ContactPage)
