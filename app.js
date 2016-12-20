const Vue = require('vue');
const App = require('./index.vue');
const store = require('./store.js');

new Vue({
  el: '#rootvue',
  store,
  render: h => h(App)
});
