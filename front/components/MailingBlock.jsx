import { connect } from 'react-redux'

class MailingBlock extends React.Component {
	render() {
		return(
			<div className="mailing-block text-center">
			    <div className="caption">sign up to our mailing</div>
			</div>
		)
	}
}

export default connect(null, null)(MailingBlock)