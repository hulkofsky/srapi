import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import {
  REQUEST_LOCATIONS,
  RECEIVE_LOCATIONS
} from '../actions'

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
  locations
});
