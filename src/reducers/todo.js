import Immutable from 'seamless-immutable';
// import * as type from '../constants/actions-app';


const initialState = Immutable({
  todos: [],
});

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      break;
  }
  return state;
}

export default TodoReducer;
