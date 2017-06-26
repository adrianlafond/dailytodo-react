import Immutable from 'seamless-immutable';
import * as type from '../constants/actions-app';


const initialState = Immutable({
  theme: 'default',
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case type.CHANGE_THEME:
      state = state.set('theme', action.value);
      break;
    default:
      break;
  }
  return state;
}

export default AppReducer;
