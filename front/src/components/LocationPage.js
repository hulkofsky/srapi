import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchLocation } from '../actions';

class LocationPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchLocation(this.props.locationID));
  }

  render() {
    return (
      <div>
      	<h1>{this.props.location.name} page</h1>

      	<NavLink to='/'>
          go home
        </NavLink>
      </div>
    )
  }
}

LocationPage.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
  })
}

const mapStateToProps = (state, ownProps) => {
  return {
    locationID: ownProps.match.params.locationID,
    location: state.location.item
  }
}

const LocationPageContainer = connect(mapStateToProps)(LocationPage);

export default LocationPageContainer