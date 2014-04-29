Tables.Orders = DS.Model.extend({
  table: DS.belongsTo('table'),
  orderTime: DS.attr('date'),
  isCompleted: DS.attr('boolean')
});

Tables.Orders.FIXTURES = [
  {
    id: 1,
    table: 2,
    orderTime: "4-29-2014",
    isCompleted: true
  },
  {
    id: 2,
    table: 2,
    orderTime: "4-29-2014",
    isCompleted: false
  },
  {
    id: 3,
    table: 3,
    orderTime: "4-29-2014",
    isCompleted: false
  }
];
