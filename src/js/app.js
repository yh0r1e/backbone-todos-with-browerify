(function () {
  'use strict';

  global.jQuery = require('jquery');
  require('bootstrap');

  var Backbone = require('backbone');
  var app = {}
  app.Todo = require('./models/todo.js');
  app.TodoList = require('./collections/todo-list.js');
  app.TodoView = require('./views/todo-view.js');
  app.AppView = require('./views/app-view.js');
  app.Router = require('./router.js');
  app.router = new app.Router();
  Backbone.history.start();
  app.AppView = new app.AppView();

}());
