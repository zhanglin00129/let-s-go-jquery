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
            var count = localStorage.getItem('count');
            $('.addToCart').click(function(){
              $('#count').text(++count);
              localStorage.setItem('count',count);
              addToCart(this.id);
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
});

function getInfoFromAllItem (barcode){

    var allItems = loadAllItems();
    for(var i=0;i<allItems.length;++i){
       if(barcode == allItems[i].barcode){
         return allItems[i];
       }
    }
}

function hasOwnProduct(barcode,cartList){
  for(var i=0;i<cartList.length;i++){
    if(barcode == cartList[i].barcode){
      cartList[i].count++;
      return true;
    }
  }
  return false;
}

function addToCart(barcode){

  var cartList = JSON.parse(localStorage.getItem('cartList'));
  if(!hasOwnProduct(barcode,cartList)){
    var item = getInfoFromAllItem(barcode);
    item.count = 1;
    cartList.push(item);
  }
  localStorage.setItem('cartList',JSON.stringify(cartList));
}
