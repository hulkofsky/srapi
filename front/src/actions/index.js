import 'whatwg-fetch';

export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const requestLocations = () => {
  return {
    type: REQUEST_LOCATIONS
  }
}

export const receiveLocations = (json) => {
  return {
    type: RECEIVE_LOCATIONS,
    locations: json,
    receivedAt: Date.now()
  }
}

export const fetchLocations = () => {
  return function (dispatch) {
    dispatch(requestLocations());

    return fetch('/location')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveLocations(json))
      )
  }
}