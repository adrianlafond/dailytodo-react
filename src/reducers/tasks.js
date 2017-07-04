import Immutable from 'seamless-immutable';
import * as type from '../constants/actions-day';


const initialState = Immutable({});

export default function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_DAY_TASKS:
      state = fetchDayTasks(state, action);
      break;
    default:
      break;
  }
  return state;
}

function fetchDayTasks(state, action) {
  const { year, month, date } = action.date;
  state = state.setIn([year, month, date], {
    status: action.status,
    items: action.items || [],
  });
  return state;
}
