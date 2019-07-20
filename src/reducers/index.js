import {combineReducers} from 'redux';
import GitReducer from './gitReducer.js';
import ActiveRepo from './activeReducer.js';
// import AuthReducer from './authReducer.js';

const allReducers= combineReducers({
  repos: GitReducer,
  activeRepo: ActiveRepo,
  // user: AuthReducer,
});

export default allReducers;
