Orders.Order = DS.Model.extend({
  tableNumber: DS.attr('integer'),
  isCompleted: DS.attr('boolean')
});
