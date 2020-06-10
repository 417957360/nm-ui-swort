import Vue from 'vue'
import App from './App.vue'
import NmUi from './nm-ui'
Vue.use(NmUi)
new Vue({
  el: '#app',
  render: h => h(App)
})
