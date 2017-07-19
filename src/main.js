import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import MKOUploader from './plugins/MKOUploader'
import VueQuillEditor from 'vue-quill-editor'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题

Vue.use(MuseUI)
Vue.use(VueQuillEditor)
Vue.use(MKOUploader)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
