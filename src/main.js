import Vue from "vue"
import App from "./App.vue"
import router from "./router"

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// component simple global registration example
// ==========================================================================
// import Sample from '@/components/Sample'
// Vue.component('Sample', Sample)
// --------------------------------------------------------------------------

// require.context is a feature of webpack that takes 3 parameters
// [directory to search in], [flag to search subdirectories], [regular expression to match files]
const requireComponent = require.context(
  './components/base', // the relative path of the directory to search
  false, // subdirectories will not be searched
  /Base[A-Z]\w+\.(vue|js)$/ // regular expression that searches for components starting with "Base" and ending in .vue or .js
)


// requireComponent.keys
// .keys is an array of each file
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})



Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
