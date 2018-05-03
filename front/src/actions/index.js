import 'whatwg-fetch';

export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const requestLocation = (locationID) => {
  return {
    type: REQUEST_LOCATION,
    id: locationID
  }
}

export const requestLocations = () => {
  return {
    type: REQUEST_LOCATIONS
  }
}

export const receiveLocation = (json) => {
  return {
    type: RECEIVE_LOCATION,
    location: json,
    receivedAt: Date.now()
  }
}

export const receiveLocations = (json) => {
  return {
    type: RECEIVE_LOCATIONS,
    locations: json,
    receivedAt: Date.now()
  }
}

export const fetchLocation = (locationID) => {
  return function (dispatch) {
    dispatch(requestLocation());

    return fetch('/api/location/' + locationID)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveLocation(json))
      )
  }
}

export const fetchLocations = () => {
  return function (dispatch) {
    dispatch(requestLocations());

    return fetch('/api/location')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveLocations(json))
      )
  }
}