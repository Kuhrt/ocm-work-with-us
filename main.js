import App from './App.vue';
import router from './router.js';

/* eslint-disable no-new */
// If the app element exists
if ($('.ocm-wwu__app').length)
{
  new Vue({
    el: '.ocm-wwu__app',
    router,
    render: h => h(App)
  });
}
