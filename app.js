const Vue = require('vue');
const App = require('./index.vue');

new Vue({
  el: '#rootvue',
  render: h => h(App)
});