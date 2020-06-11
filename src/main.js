import Vue from 'vue'
import App from './App.vue'
import NmUi from './nm-ui'
import theme from './nm-ui/theme'
Vue.use(NmUi)

theme.add('test', {
  background: '#e6eefb', // 背景色 即主色调
  gradientHight: '#f6ffff', // 渐变深色
  gradientLow: '#cfd6e2', // 渐变浅色
  shadowHight: '#ffffff', // 阴影浅色
  shadowLow: '#c8cfda', // 阴影深色
  radius: '20px' // 圆角
})
theme.use('test')

new Vue({
  el: '#app',
  render: h => h(App)
})
