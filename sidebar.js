$(document).ready(function(){

	var $navSidebar = $('.sidebar > li.menu-item');
	$navSidebar.hover(function(){
		$(this).toggleClass("open");
		$(this).toggleClass("active-menu");
	});

});