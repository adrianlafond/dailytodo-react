import Immutable from 'seamless-immutable';
import * as type from '../constants/actions-app';
import { THEME_DEFAULT } from '../themes/';
import { FORMAT_DEFAULT } from '../constants/date-formats';


const initialState = Immutable({
  theme: THEME_DEFAULT.id,
  dateFormat: FORMAT_DEFAULT,
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case type.CHANGE_THEME:
      state = state.set('theme', action.value);
      break;
    case type.CHANGE_DATE_FORMAT:
      state = state.set('dateFormat', action.value);
      break;
    default:
      break;
  }
  return state;
}

export default AppReducer;
