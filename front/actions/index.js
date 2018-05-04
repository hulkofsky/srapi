import 'whatwg-fetch'

const baseApiUrl = 'http://desktop-9pqed1r:1337/api/'

export const REQUEST_CURRENT_LOCATION = 'REQUEST_CURRENT_LOCATION'
export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS'
export const RECEIVE_CURRENT_LOCATION = 'RECEIVE_CURRENT_LOCATION'
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'

export const requestCurrentLocation = (locationID) => {
  return {
    type: REQUEST_CURRENT_LOCATION,
    id: locationID
  }
}

export const requestLocations = () => {
  return {
    type: REQUEST_LOCATIONS
  }
}

export const receiveCurrentLocation = (json) => {
  return {
    type: RECEIVE_CURRENT_LOCATION,
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

export const fetchCurrentLocation = (locationID) => {
  return function (dispatch) {
    dispatch(requestCurrentLocation());

    return fetch(baseApiUrl + 'location/' + locationID)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveCurrentLocation(json))
      )
  }
}

export const fetchLocations = () => {
  return function (dispatch) {
    dispatch(requestLocations());

    return fetch(baseApiUrl + 'location')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveLocations(json))
      )
  }
}