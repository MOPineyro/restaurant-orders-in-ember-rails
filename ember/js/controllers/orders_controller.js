Tables.OrdersController = Ember.ArrayController.extend({
  actions: {
    createOrder: function(tableNumber) {
      var tableNumber = tableNumber

      // Create new Order
      var order = this.store.createRecord('order', {
        tableNumber: tableNumber,
        orderTime: Date(),
        isCompleted: false,
      });

      order.save();
    }
  }
})
