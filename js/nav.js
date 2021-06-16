// アコーディオンメニュー

//.main-nav-menuをhoverした時
$(function(){
$(".main-nav-menu").hover(function(){

//.sub-navをslideDownする
$(".sub-nav:not(:animated)", this).slideDown(200);}, //0.2秒＊1000＝200

//hoverが外れた時.sub-navをhideする
function(){
  $(".sub-nav",this).hide();

});
});