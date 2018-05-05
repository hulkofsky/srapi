import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import { fetchLocation } from '../actions';

class LocationPage extends React.Component {
  componentDidMount() {
  }

  render() {
    const { location } = this.props;

    return (
      <div>
      	<h1>{location && location.item && location.item.name} page</h1>

      	<Link href={{ pathname: '/' }}>
          <a>go home</a>
        </Link>
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

const mapStateToProps = (state) => {
  return {
    location: state.currentLocation
  }
}

const LocationPageContainer = connect(mapStateToProps)(LocationPage);

export default LocationPageContainer