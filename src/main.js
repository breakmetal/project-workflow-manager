import App from './App.vue'
import router from './router'
import Vue from 'vue'
import Vuetify from 'vuetify'
import vuetify_css from 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(vuetify_css)
Vue.use(Vuetify)

new Vue({
  router,
  Vuetify,
  vuetify,
  render: h => h(App)
}).$mount('#app')
