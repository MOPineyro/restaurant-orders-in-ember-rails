Tables.Router.map(function() {
  this.resource('tables', { path: '/'})
});

Tables.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});

Tables.OrdersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('order');
  }
});
