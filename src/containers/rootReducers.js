import {combineReducers} from 'redux';
import loginReducer from '../reducers/login';

const allReducers = combineReducers({
  login: loginReducer,
});

export default allReducers;