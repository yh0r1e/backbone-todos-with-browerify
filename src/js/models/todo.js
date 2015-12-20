var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    title: 'todo title',
    completed: false
  }
});
