import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Table } from 'view-design'
Vue.component('Button', Button)
Vue.component('Table', Table)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
