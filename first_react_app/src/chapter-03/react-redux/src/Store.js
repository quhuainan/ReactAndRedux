import reducer from './Reducer.js';
import {createStore} from '../../../chapter-04/todo/node_modules/redux'
const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
};

const store = createStore(reducer, initValues);

export default store;