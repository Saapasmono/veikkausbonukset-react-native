import {combineReducers} from 'redux';
import PickReducer from './PickReducer';

export default combineReducers({
  pick: PickReducer
});