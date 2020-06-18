import nmButton from './Button';
import nmIcon from './Icon';

const version = '__VERSION__';
function install (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.use(components[key]);
  });
}
const components = {
  nmButton, nmIcon
};
export {
  nmButton, nmIcon
};
if (typeof window !== 'undefined' && window.Vue) install(window.Vue);
export default {
  version,
  install,
  ...components
};