import fetch from 'isomorphic-unfetch'

const backendUrl = 'http://localhost:1337'
const authUrl = backendUrl + '/auth'
const baseApiUrl = backendUrl + '/api'

export const GET_LOCATION_DATA = 'GET_LOCATION_DATA'
export const REQUEST_CURRENT_LOCATION = 'REQUEST_CURRENT_LOCATION'
export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS'
export const RECEIVE_CURRENT_LOCATION = 'RECEIVE_CURRENT_LOCATION'
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const SHOW_AUTH_DIALOG = 'SHOW_AUTH_DIALOG'
export const HIDE_AUTH_DIALOG = 'HIDE_AUTH_DIALOG'
export const SUBMIT_AUTH_DIALOG = 'SUBMIT_AUTH_DIALOG'
export const PROCESS_AUTH_DIALOG = 'PROCESS_AUTH_DIALOG'
export const SHOW_MAIN_MENU = 'SHOW_MAIN_MENU'
export const HIDE_MAIN_MENU = 'HIDE_MAIN_MENU'

export const getLocationData = (json) => {
  console.log('GET_LOCATION_DATA');
  return {
    type: GET_LOCATION_DATA,
    locationData: json
  }
}

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

    return fetch(baseApiUrl + '/location/' + locationID)
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

    return fetch(baseApiUrl + '/location')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => 
        dispatch(receiveLocations(json))
      )
  }
}

export const showAuthDialog = () => {
  return {
    type: SHOW_AUTH_DIALOG
  }
}

export const hideAuthDialog = () => {
  return {
    type: HIDE_AUTH_DIALOG
  }
}

export const showMainMenu = () => {
  return {
    type: SHOW_MAIN_MENU
  }
}

export const hideMainMenu = () => {
  return {
    type: HIDE_MAIN_MENU
  }
}

export const submitAuthDialog = (identifier, password) => {
  return function (dispatch) {
    return fetch(authUrl + '/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({identifier, password})
    })
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
    .then(json => {
      if (json.error) {
        alert(json.message)
      } else {
        dispatch(processAuthDialog(json))
      }
    })
  }
}

export const processAuthDialog = (auth) => {
  return {
    type: PROCESS_AUTH_DIALOG,
    auth: auth
  }
}