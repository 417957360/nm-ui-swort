// sumFunction 插件对应组件的名字
import nmButton from './nm-button';

const version = '__VERSION__';
function install (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.use(components[key]);
  });
}
const components = {
  nmButton
};
export {
  nmButton
};
if (typeof window !== 'undefined' && window.Vue) install(window.Vue);
export default {
  version,
  install,
  ...components
};