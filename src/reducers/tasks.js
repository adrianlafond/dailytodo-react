import Immutable from 'seamless-immutable';
// import * as type from '../constants/actions-app';


const initialState = Immutable({
  years: {},
});

export default function TaskReducer(state = initialState, action) {
  switch (action.type) {
    default:
      break;
  }
  return state;
}
