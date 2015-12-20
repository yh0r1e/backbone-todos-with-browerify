var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var TodoView = require('./todo-view.js');
var todoList = require('../collections/todo-list.js');

module.exports = Backbone.View.extend({
  el: '#todoapp',
  initialize: function () {
    todoList.on('add', this.addOne, this);
    todoList.on('reset', this.addAll, this);
    todoList.fetch();
  },
  events: {
    'keypress #new-todo': 'createTodoOnEnter'
  },
  createTodoOnEnter: function (e) {
    var $input = $('#new-todo');
    if (e.which !== 13 || !$input.val().trim()) {
      return;
    }
    todoList.create({title: $input.val(), detail: 'wirte', completed: false});
    $input.val('');
  },
  addOne: function (todo) {
    var todoView = new TodoView({model: todo});
    $('#todo-list').append(todoView.render().el);
  },
  addAll: function () {
    $('#todo-list').html('');
    switch (window.filter) {
    case 'pending':
      _.each(todoList.remaining(), this.addOne, this);
      break;
    case 'completed':
      _.each(todoList.completed(), this.addOne, this);
      break;
    default:
      todoList.each(this.addOne, this);
      break;
    }
  }
});
