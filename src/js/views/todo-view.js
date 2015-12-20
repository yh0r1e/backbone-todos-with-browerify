var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

module.exports =  Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#item-template').html()),
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.titleContainer = this.$('.title-container');
    this.input = this.$('.edit');
    return this;
  },
  initialize: function () {
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },
  events: {
    'dblclick .title': 'editTitle',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'closeTitle',
    'click .toggle': 'toggleCompleted',
    'click .destroy': 'destroy'
  },
  editTitle: function () {
    this.titleContainer.addClass('editing');
    this.input.focus();
  },
  closeTitle: function () {
    var value = this.input.val().trim();
    if (value) {
      this.model.save({title: value});
    }
    this.titleContainer.removeClass('editing');
  },
  updateOnEnter: function (e) {
    if (e.which === 13) {
      this.closeTitle();
    }
  },
  toggleCompleted: function () {
    this.model.save({completed: !this.model.get('completed')});
  },
  destroy: function () {
    this.model.destroy();
  }
});
