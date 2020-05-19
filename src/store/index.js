import { combineReducers, createStore } from 'redux';

import todolist from './todolist';

const allReducers = combineReducers({
  todolist: todolist,
});

const store = createStore(allReducers);

export default store;