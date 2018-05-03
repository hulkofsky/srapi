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
			    		<Link to={`/location/${location.id}`}>
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
  	id: PropTypes.number,
  	name: PropTypes.string,
  	url: PropTypes.string,
  })
}

const mapStateToProps = (state, ownProps) => {
  return {
    locations: state.locations.items
  }
}

const HomePageContainer = connect(mapStateToProps)(HomePage);

export default HomePageContainer;