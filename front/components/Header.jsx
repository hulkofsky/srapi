import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  showAuthDialog,
  hideAuthDialog,
  showMainMenu,
  hideMainMenu,
  submitAuthDialog,
  processAuthDialog
} from '../actions'
import { Button, Modal } from 'react-bootstrap'

class Header extends React.Component {
  state = {
    navIsSticky: false
  }

  handleAuthDialogSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    
    this.props.submitAuthDialog(data.get("identifier"), data.get("password"))
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateMainMenuSticky.bind(this), { passive: true })

    this.updateMainMenuSticky()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateMainMenuSticky)
  }

  updateMainMenuSticky() {
    this.setState({navIsSticky: (window.pageYOffset > 0)})
  }

  toggleMainMenu() {
    this.props.mainMenu.isVisible ? this.props.hideMainMenu() : this.props.showMainMenu()
  }

  render () {
    let { authDialog } = this.props
    let navClasses = [
      'nav',
      (this.props.navClass ? this.props.navClass : ''),
      (this.state.navIsSticky ? 'sticky' : ''),
      (this.props.mainMenu.isVisible ? 'menu-visible' : '')
    ]

    let mainMenuClasses = [
      'main-menu',
      (this.props.mainMenu.isVisible ? 'visible' : ''),
      (this.state.navIsSticky ? 'nav-sticky' : '')
    ]

    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/static/style.css" />
        </Head>

        {/*<Button bsStyle="primary" bsSize="large" onClick={this.props.showAuthDialog}>Show auth dialog</Button>*/}

        <Modal show={authDialog.isVisible} onHide={this.props.hideAuthDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Authentication required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleAuthDialogSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="identifierInput">Username or email</label>
                <input type="text" name="identifier" className="form-control" id="identifierInput" />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input type="password" name="password" className="form-control" id="passwordInput" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </Modal.Body>
        </Modal>

        <nav className={navClasses.join(' ')}>
          <Link href={{ pathname: '/' }}>
            <a className="main-menu-item">
              <img className="logo" src="/static/svg/logo.svg" alt="logo" onClick={this.toggleMainMenu.bind(this)} />
            </a>
          </Link>
          <div className="burger" onClick={this.toggleMainMenu.bind(this)}></div>
        </nav>

        <div className={mainMenuClasses.join(' ')}>
          <Link href={{ pathname: '/' }}>
            <a className="main-menu-item">
              <div onClick={this.toggleMainMenu.bind(this)}>home</div>
            </a>
          </Link>
          <Link href={{ pathname: '/locations' }}>
            <a className="main-menu-item">
              <div onClick={this.toggleMainMenu.bind(this)}>locations</div>
            </a>
          </Link>
          <Link href={{ pathname: '/spotify' }}>
            <a className="main-menu-item">
              <div onClick={this.toggleMainMenu.bind(this)}>spotify</div>
            </a>
          </Link>
          <Link href={{ pathname: '/stance' }}>
            <a className="main-menu-item">
              <div onClick={this.toggleMainMenu.bind(this)}>stance</div>
            </a>
          </Link>
          <Link href={{ pathname: '/contact' }}>
            <a className="main-menu-item">
              <div onClick={this.toggleMainMenu.bind(this)}>contact</div>
            </a>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authDialog: state.authDialog,
    mainMenu: state.mainMenu,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAuthDialog: bindActionCreators(showAuthDialog, dispatch),
    hideAuthDialog: bindActionCreators(hideAuthDialog, dispatch),
    submitAuthDialog: bindActionCreators(submitAuthDialog, dispatch),
    processAuthDialog: bindActionCreators(processAuthDialog, dispatch),
    showMainMenu: bindActionCreators(showMainMenu, dispatch),
    hideMainMenu: bindActionCreators(hideMainMenu, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)