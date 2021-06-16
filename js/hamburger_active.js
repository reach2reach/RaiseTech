//プラスマイナス設定

$(function() {
	// アイコンを囲うaタグの指定
	var toggles = $('.main-nav-menu a:not(.subnav-none)');
	//アイコンをhoverでクラスの切替え
	toggles.hover( function (event) {
		event.preventDefault(); 
		toggles.toggleClass("active");
	});
});