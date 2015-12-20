var Backbone = require('backbone');
var $ = require('jquery');

Backbone.$ = $;
Backbone.localStorage = require('backbone.localstorage');

var Todo = require('../models/todo.js');

var TodoList = Backbone.Collection.extend({
  model: Todo,
  localStorage: new Store('Backbone-todo'),
  completed: function () {
    return this.filter(function (todo) {
      return todo.get('completed');
    })
  },
  remaining: function () {
    return this.without.apply(this, this.completed());
  }
});

module.exports = new TodoList();
