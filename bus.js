/* 
  Expose this empty Vue instance as a central event bus.
  For larger application, consider use a state-management system like Vuex.
*/
const Vue = require('vue');
module.exports = new Vue();
