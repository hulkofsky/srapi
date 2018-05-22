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
import { Button, Modal } from 'react-bootstrap';

class Header extends React.Component {
  handleAuthDialogSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    this.props.submitAuthDialog(data.get("identifier"), data.get("password"));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateMainMenuSticky.bind(this), { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateMainMenuSticky)
  }

  updateMainMenuSticky() {
    let nav = document.querySelector(".nav");

    (window.pageYOffset > 0) ? nav.classList.add("sticky") : nav.classList.remove("sticky");
  }

  toggleMainMenu() {
    this.props.mainMenu.isVisible ? this.props.hideMainMenu() : this.props.showMainMenu();
  }

  render () {
    let { authDialog } = this.props;

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

        <nav className="nav">
          <img className="logo" src="/static/svg/logo.svg" alt="logo" />
          <img className="burger" src="/static/svg/burger.svg" alt="burger" onClick={this.toggleMainMenu.bind(this)} />
        </nav>

        <div className={'main-menu ' + (this.props.mainMenu.isVisible ? 'visible' : '')}>
          <Link href={{ pathname: '/' }}>
            <a className="main-menu-item">home</a>
          </Link>
          <Link href={{ pathname: '/locations' }}>
            <a className="main-menu-item">locations</a>
          </Link>
          <Link href={{ pathname: '/spotify' }}>
            <a className="main-menu-item">spotify</a>
          </Link>
          <Link href={{ pathname: '/stance' }}>
            <a className="main-menu-item">stance</a>
          </Link>
          <Link href={{ pathname: '/contact' }}>
            <a className="main-menu-item">contact</a>
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