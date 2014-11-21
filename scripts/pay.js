$(document).ready(function () {
  $('.payConfirm').click(function(){
   localStorage.setItem('count',0);
   localStorage.setItem('cartList',JSON.stringify([]));
  });
});
