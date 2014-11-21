$(document).ready(function () {
  var count = JSON.parse(localStorage.getItem('count'));
  $('#count').text(count);
  CartList();

  $('.addToCart').click(function(){
    $('#count').text(++count);
    localStorage.setItem('count',count);
    addToCart(this.id);
  });
});

function CartList(){
  var cartList = JSON.parse(localStorage.getItem('cartList'));
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
