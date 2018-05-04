import { combineReducers } from 'redux'
import {
  REQUEST_CURRENT_LOCATION,
  REQUEST_LOCATIONS,
  RECEIVE_CURRENT_LOCATION,
  RECEIVE_LOCATIONS
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

export default combineReducers({
  currentLocation,
  locations
});
