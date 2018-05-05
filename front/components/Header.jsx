import Head from 'next/head'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  showAuthDialog,
  submitAuthDialog,
  processAuthDialog
} from '../actions'

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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        </Head>

        <button data-toggle="modal" data-target="#exampleModal">Show auth dialog</button>

        <div className="modal" id="exampleModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Authentication required</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authDialog: state.authDialog
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAuthDialog: bindActionCreators(showAuthDialog, dispatch),
    submitAuthDialog: bindActionCreators(submitAuthDialog, dispatch),
    processAuthDialog: bindActionCreators(processAuthDialog, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)