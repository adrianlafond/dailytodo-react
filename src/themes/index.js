export const THEME_LIGHT = {
  id: 'light',
  label: 'Light',
};
export const THEME_DARK = {
  id: 'dark',
  label: 'Dark',
}
export const THEME_DEFAULT = THEME_LIGHT;

export const THEMES = [
  THEME_LIGHT,
  THEME_DARK,
];

export function getTheme(id) {
  return THEMES.find(item => {
    return id === item.id;
  }) || THEME_DEFAULT;
}

export default THEMES;
