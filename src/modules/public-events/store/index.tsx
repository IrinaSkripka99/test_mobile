import {combineReducers} from 'redux';
import list from './list';

const eventsReducer = combineReducers({
  list,
});

export default eventsReducer;
