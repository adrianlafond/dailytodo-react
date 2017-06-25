import * as type from '../constants/actions-app';

export function changeRoute(value) {
  return { type: type.CHANGE_ROUTE, value };
}

export function changeTheme(value) {
  return { type: type.CHANGE_THEME, value };
}
