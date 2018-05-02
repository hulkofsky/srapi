import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const LocationPage = ({location}) => (
    <div>
    	<h1>{location.name} page</h1>

    	<NavLink to='/'>
        go home
      </NavLink>
    </div>
)

LocationPage.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })
}

const mapStateToProps = state => {
  return {
    location: [{
    	name: 'London',
    	url: 'london'
    }]
  }
}

const CLocationPage = connect(
  mapStateToProps
)(LocationPage)

export default CLocationPage