import './root.css';
import './light.css';
import './dark.css';
import './high-contrast-dark.css';
import './high-contrast-light.css';

export const THEME_LIGHT = {
  id: 'light',
  label: 'Light',
};
export const THEME_DARK = {
  id: 'dark',
  label: 'Dark',
};
export const THEME_HIGH_CONTRAST_LIGHT = {
  id: 'high-contrast-light',
  label: 'High Contrast Light',
};
export const THEME_HIGH_CONTRAST_DARK = {
  id: 'high-contrast-dark',
  label: 'High Contrast Dark',
};
export const THEME_DEFAULT = THEME_LIGHT;

export const THEMES = [
  THEME_LIGHT,
  THEME_DARK,
  THEME_HIGH_CONTRAST_LIGHT,
  THEME_HIGH_CONTRAST_DARK,
];

export function getTheme(id) {
  return THEMES.find(item => {
    return id === item.id;
  }) || THEME_DEFAULT;
}

export default THEMES;
