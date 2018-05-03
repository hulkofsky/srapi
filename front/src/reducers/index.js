import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import {
  REQUEST_LOCATION,
  REQUEST_LOCATIONS,
  RECEIVE_LOCATION,
  RECEIVE_LOCATIONS
} from '../actions'

function location(
  state = {
    isFetching: false,
    item: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_LOCATION:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_LOCATION:
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
  router: routerReducer,
  location,
  locations
});
