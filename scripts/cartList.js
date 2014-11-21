$(document).ready(function () {
  var count = JSON.parse(localStorage.getItem('count'));
  $('#count').text(count);
  CartList();
});

function CartList(){
  var cartList = [
    {
      name:'可口可乐',
      price:3.00,
      unit:'瓶',
      count:1,
      summary:3.00
    },
    {
      name:'雪碧',
      price:3.00,
      unit:'瓶',
      count:1,
      summary:3.00
    },
  ];
    var sumPrice = 0;
    _(cartList).each(function (item) {
          var itemSummary = item.price*item.count;
          sumPrice += itemSummary;
          var CartItem = $('<tr>\
                <td>' + item.name + '</td>\
                <td>' + item.price.toFixed(2) + '</td>\
                <td>' + item.unit + '</td>\
                <td>' + item.count + '</td>\
                <td>' + itemSummary.toFixed(2) + '</td>\
              </tr>');
    $('#cartList').append(CartItem);
  });
  $('#sumPrice').prepend(sumPrice.toFixed(2));
}
