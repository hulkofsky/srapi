import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'

class StancePage extends React.Component {
  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <div className="stance-page">
        <Header title="Stance" navClass="nav-dark" />

        <div className="main-caption">
          stance is a <br/>strong word. <br/>but then we don’t <br/>exactly half ass things
        </div>

        <div className="photo-block">
          <div className="row">
            <div className="col-md-4 left">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              </div>
              <div className="image">
                <img className="img-fluid" src="/static/images/FG_UI01_assets_home_bathroom.jpg" alt="" />
              </div>
              <div className="dashes"></div>
            </div>
            <div className="col-md-7 offset-md-1 right">
              <img className="img-fluid" src="/static/images/FG_UI01_assets_location_local 5.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="author-block">
          <div className="row">
            <div className="col-md-8 left">
              be the author.<br/>
              not the audience
            </div>
            <div className="col-md-4 right">
              <div className="dashes"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-8 right">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
              </div>
            </div>
          </div>
        </div>

        <div className="space-block">
          <div className="quote">space is what you make of it</div>
          <div className="text">Every standard starts with a problem that needs solving. 
            Ours was that student housing is exactly that. 
            Housing. Nothing more. We’re creating the more.
          </div>
          <div className="dashes first"></div>
          <div className="dashes second"></div>
        </div>

        <div className="final-captions">
          <div className="caption-1">
            notice the negative.<br/>find the positive
          </div>
          <div className="caption-2">
            now isn’t<br/>new enough
          </div>
        </div>

        <Footer></Footer> 
      </div>
    )
  }
}


export default connect(null, null)(StancePage)
