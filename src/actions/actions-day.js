import * as type from '../constants/actions-day';

export function getDayTasks(date) {
  return dispatch => {
    dispatch({ type: type.FETCH_DAY_TASKS, date, status: 'fetching' });
    // TODO: Query Firebase
    requestAnimationFrame(() => {
      dispatch({ type: type.FETCH_DAY_TASKS, date, status: 'complete', items: [] });
    });
  }
}
