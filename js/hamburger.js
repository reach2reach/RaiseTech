//ハンバーガーメニュー
  $(function() {
    $(".is-hamburger").on("click",function(){ //clickしたらis-openが加わる
      $(this).toggleClass('is-open');
      $(".global-nav").slideToggle('is-open');   //global-navにis-openのクラス
      $("body") .toggleClass("is-open");
    });
   });



   