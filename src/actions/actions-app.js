import * as type from '../constants/actions-app';

export function changeTheme(value) {
  return { type: type.CHANGE_THEME, value };
}

export function changeDateFormat(value) {
  return { type: type.CHANGE_DATE_FORMAT, value };
}
