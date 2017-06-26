import * as type from '../constants/actions-app';

export function changeTheme(value) {
  return { type: type.CHANGE_THEME, value };
}
