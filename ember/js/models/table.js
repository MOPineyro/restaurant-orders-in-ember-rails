Tables.Table = DS.Model.extend({
  orders: DS.hasMany('orders'),
  tableNumber: DS.attr('integer'),
  numberOfSeats: DS.attr('integer')
})

Tables.Table.FIXTURES = [
  {
    id: 1,
    orders: 2,
    tableNumber:  1
  },
  {
    id: 2,
    orders: 2,
    tableNumber:  2
  },
  {
    id: 3,
    orders: 2,
    tableNumber:  3
  },
  {
    id: 4,
    orders: 2,
    tableNumber:  4
  },
  {
    id: 5,
    orders: 2,
    tableNumber:  5
  },
  {
    id: 6,
    orders: 2,
    tableNumber:  6
  }
];
