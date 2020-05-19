import { combineReducers, createStore } from 'redux';

import todolist from './todolist';

const allReducers = combineReducers({
  todolist: todolist,
  featureList: () => {return {name: 'Rudra', age: 24}}
});

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;