import { combineReducers } from 'redux'
import * as actions from '../actions'

function currentLocation(
  state = {
    isFetching: false,
    item: null
  },
  action
) {
  switch (action.type) {
    case actions.REQUEST_CURRENT_LOCATION:
      return Object.assign({}, state, {
        isFetching: true
      })
    case actions.RECEIVE_CURRENT_LOCATION:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.location,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function locationData(state = {locationData: {}}, action) {
  console.log(action, 'aktion blyat!!!');
  switch (action.type) {
    case actions.GET_LOCATION_DATA:
      return Object.assign({}, state, {
        locationData: action.locationData,
      })
    default:
      return state
  }
}

function locations(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case actions.REQUEST_LOCATIONS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case actions.RECEIVE_LOCATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.locations,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function authDialog(
  state = {
    isVisible: false,
    isSubmitting: false,
    identifier: null,
    password: null,
    auth: null,
    error: null,
  },
  action
) {
  switch (action.type) {
    case actions.SHOW_AUTH_DIALOG:
      return Object.assign({}, state, {
        isVisible: true
      })
    case actions.HIDE_AUTH_DIALOG:
      return Object.assign({}, state, {
        isVisible: false
      })
    case actions.SUBMIT_AUTH_DIALOG:
      return Object.assign({}, state, {
        isSubmitting: true,
        identifier: action.identifier,
        password: action.password
      })
    case actions.PROCESS_AUTH_DIALOG:
      return Object.assign({}, state, {
        isSubmitting: false,
        isVisible: false,
        auth: action.auth
      })
    default:
      return state
  }
}

function mainMenu(
  state = {
    isVisible: false
  },
  action
) {
  switch (action.type) {
    case actions.SHOW_MAIN_MENU:
      return Object.assign({}, state, {
        isVisible: true
      })
     case actions.HIDE_MAIN_MENU:
      return Object.assign({}, state, {
        isVisible: false
      })
    default:
      return state
  }
}

export default combineReducers({
  currentLocation,
  locations,
  authDialog,
  mainMenu,
  locationData
});
