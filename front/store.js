import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import actions from './actions'
import reducers from './reducers'

const appInitialState = {
  locations: [],
  currentLocation: null,
  mainMenu: {
    isVisible: false
  },
  authDialog: {
  	isVisible: false,
  	isSubmitting: false,
  	identifier: '',
  	password: '',
  	auth: null,
  	error: null,
  }
}

export const initStore = (initialState = appInitialState) => {
  return createStore(
    reducers, 
    initialState, 
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)
    ))
  }