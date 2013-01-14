define(['backbone'], function(Backbone) {
  var todo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false,
      timestamp: 0
    },

    validate: function(attrs) {
      if(!attrs.title) {
        return 'cannot have an empty title';
      }
    }
  });
  return todo;
});
