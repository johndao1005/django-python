import {combineReducers} from 'redux';
import appReducer from './app.reducer';
import firebase from './firebase.reducer';

export default combineReducers({
    firebase
  });