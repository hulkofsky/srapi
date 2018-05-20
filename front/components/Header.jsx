import Head from 'next/head'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  showAuthDialog,
  hideAuthDialog,
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authDialog: state.authDialog,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAuthDialog: bindActionCreators(showAuthDialog, dispatch),
    hideAuthDialog: bindActionCreators(hideAuthDialog, dispatch),
    submitAuthDialog: bindActionCreators(submitAuthDialog, dispatch),
    processAuthDialog: bindActionCreators(processAuthDialog, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)