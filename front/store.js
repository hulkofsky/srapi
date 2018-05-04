import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import actions from './actions'
import reducers from './reducers'

const initialState = {
  locations: [],
  currentLocation: null
}

export const initStore = () => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
