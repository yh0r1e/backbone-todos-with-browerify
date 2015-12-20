var assert = require('assert');

describe('models', function () {
  before(function () {
    Todo = require('../src/js/models/todo');
  });

  describe('todo.js', function () {
    it('default values', function () {
      var todo = new Todo();
      assert.equal('todo title', todo.get('title'));
      assert.equal(false, todo.get('completed'));
    });
    it('custom values', function () {
      var todo = new Todo({title: 'edited title', completed: true});
      assert.equal('edited title', todo.get('title'));
      assert.equal(true, todo.get('completed'));
    });
  });
});
