var Backbone = require('backbone');
var todoList = require('./collections/todo-list.js');

module.exports = Backbone.Router.extend({
  routes: {
    '*filter': 'setFilter'
  },
  setFilter: function (params) {
    console.log(params);
    window.filter = params || '';
    todoList.trigger('reset');
  }
});
