import { connect } from 'react-redux'

class Footer extends React.Component {

  render () {
    return (
      <footer className="footer">
        <img src="/static/svg/FG_UI01_assets_footer fg logo.svg" alt="footer-logo" className="footer-logo" />
        <div className="footer-menu">
          <a href="#" className="menu-item">Partners</a>
          <a href="#" className="menu-item">Brand Appearances</a>
          <a href="#" className="menu-item">Press Kit </a>
          <a href="#" className="menu-item">Legal &amp; Policy</a>

          <div className="dev">
            designed and built by vitamin london
          </div>
        </div>
      </footer>
    )
  }
}

export default connect(null, null)(Footer)