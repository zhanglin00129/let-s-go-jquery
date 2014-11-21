$(document).ready(function () {
  var savePrice = JSON.parse(localStorage.getItem('savePrice'));
  $('#savePrice').text(savePrice);
  $('.payConfirm').click(function(){
   localStorage.setItem('count',0);
   localStorage.setItem('cartList',JSON.stringify([]));
  });
});
