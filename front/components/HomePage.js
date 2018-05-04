import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Link from 'next/link'
import { fetchLocations } from '../actions'

class HomePage extends React.Component {
	static getInitialProps({ store, isServer }) {

  }

	componentDidMount() {
		
	}

	render() {
		const { locations } = this.props;

		return (
		    <div>
		    	<h1>Home page</h1>

		    	{locations && locations.map((location) => (
		    		<div key={location.id}>
			    		<Link href={{ pathname: '/location', query: { id: location.id } }}>
			    		  <a>{location.name}</a>
			    		</Link>
			    	</div>	
		    	))}
		    </div>
		)
	}
}

HomePage.propTypes = {
  locations: PropTypes.arrayOf(
  	PropTypes.shape({
  		id: PropTypes.number,
	  	name: PropTypes.string,
	  	url: PropTypes.string,
	  })
  	)
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.items
  }
}

const HomePageContainer = connect(mapStateToProps)(HomePage);

export default HomePageContainer;