import setTheme from './setTheme'
import Default from './default'

const themes = [
  setTheme
];

const vars = {
  Default
};

function getThemeStyle () {
  const themeId = 'nm-theme';
  let styleEl = document.getElementById(themeId);
  if (styleEl) return styleEl;
  styleEl = document.createElement('style');
  styleEl.id = themeId;
  document.body.appendChild(styleEl);
  return styleEl;
}

export default {
  addCreateTheme (theme) {
    const length = themes.length;
    themes.splice(length - 1, 0, theme);
    return this;
  },
  add (name, varObj = {}, extendName = 'Default') {
    const theme = {
      name,
      ...vars[extendName],
      ...varObj
    };
    vars[name] = theme;
    return this;
  },
  use (name) {
    const themeEl = getThemeStyle();
    themeEl.innerHTML = themes.map((theme) => theme(vars[name], vars[name].type, name)).join(' ');
    return this;
  },
  generate (name) {
    return themes.map((theme) => theme(vars[name], vars[name].type, name)).join(' ');
  }
};