import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLocations } from '../actions';

class HomePage extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchLocations());
	}

	render() {
		const { locations } = this.props;

		return (
		    <div>
		    	<h1>Home page</h1>

		    	{locations.map((location) => (
		    		<div>
			    		<Link to={location.url}>
			    		    {location.name}
			    		</Link>
			    	</div>	
		    	))}
		    </div>
		)
	}
}

HomePage.propTypes = {
  locations: PropTypes.shape({
  	name: PropTypes.string,
  	url: PropTypes.string,
  })
}

const mapStateToProps = (state, ownProps) => {
	console.log(state);
  return {
    locations: state.locations.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLocations: () => {
    	dispatch(fetchLocations());
    }
  }
}

const HomePageContainer = connect(mapStateToProps)(HomePage);

export default HomePageContainer;