$(document).ready(function () {
    var feature = (function () {
        var initItems = function () {
            var items = loadAllItems();

            _(items).each(function (item) {
                var addCart = '<button class="addToCart" id="' +item.barcode +'">加入购物车</button>';
                var listItem = $('<tr>\
                            <td>' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>' + item.unit + '</td>\
                            <td>' + addCart + '</td>\
                          </tr>');
                $('#item-table').append(listItem);
            });
            var count = $('#count').text();
            $('.addToCart').click(function(){
              $('#count').text(++count);
            });
        };

        var printDate = function() {
            $("#pay-date").text(utils.getDate());
        };

        return {
            init: initItems,
            printDate: printDate
        };
    })();

    feature.init();
    feature.printDate();
    Cart();
});


  function Cart(){
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
