import { combineReducers } from 'redux'
import {
  REQUEST_CURRENT_LOCATION,
  REQUEST_LOCATIONS,
  RECEIVE_CURRENT_LOCATION,
  RECEIVE_LOCATIONS,
  SHOW_AUTH_DIALOG,
  HIDE_AUTH_DIALOG,
  SUBMIT_AUTH_DIALOG,
  PROCESS_AUTH_DIALOG
} from '../actions'

function currentLocation(
  state = {
    isFetching: false,
    item: null
  },
  action
) {
  switch (action.type) {
    case REQUEST_CURRENT_LOCATION:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_CURRENT_LOCATION:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.location,
        lastUpdated: action.receivedAt
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
    case REQUEST_LOCATIONS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_LOCATIONS:
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
    case SHOW_AUTH_DIALOG:
      return Object.assign({}, state, {
        isVisible: true
      })
    case HIDE_AUTH_DIALOG:
      return Object.assign({}, state, {
        isVisible: false
      })
    case SUBMIT_AUTH_DIALOG:
      return Object.assign({}, state, {
        isSubmitting: true,
        identifier: action.identifier,
        password: action.password
      })
    case PROCESS_AUTH_DIALOG:
      return Object.assign({}, state, {
        isSubmitting: false,
        isVisible: false,
        auth: action.auth
      })
    default:
      return state
  }
}

export default combineReducers({
  currentLocation,
  locations,
  authDialog
});
