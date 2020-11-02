import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import echarts from 'echarts'
import selfComponents from './components/index'
import './common/flexible'
// import './plugins/iview'

import './assets/styles/base.less'

Vue.use(selfComponents)

Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
