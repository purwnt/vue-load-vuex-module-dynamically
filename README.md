# Vue Load Vuex Module Dynamically
Dynamically import vuex module in your Vue.js application

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/belajarpythoncom/belajarpython.com/blob/master/LICENSE)

This vuex store saves you (and others!) time in two ways:

- **No configuration.** The easiest way to enforce consistent style in your vue
  project. Just drop it in.
- **Automatically load module.** Just create your module in `store/modules` folder and say goodbye to import vuex module one by one.


### How To Use It

Clone this repository
```
git clone https://github.com/purwnt/vue-load-vuex-module-dynamically.git
```

Move `store` folder to your `src` Vue.js application project
```
cd vue-load-vuex-module-dynamically
mv store YOUR_VUE_PROJECT/src/
```

Import store in your `main.js` file and use it.
```
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```
