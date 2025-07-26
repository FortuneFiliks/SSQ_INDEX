// let get_Hamburger = document.querySelector(".menu");

let get_Menu = document.querySelector(".mobile_menu_section");

$(".menu").toggle(view_Menu, hide_Menu);
function view_Menu(){
	$(":root").css({"overflow-y":"hidden"});
	$(".mobile_menu_section").css({"transform" : "translateY(0%)"});
	
}

function hide_Menu(){
	$(":root").css({"overflow-y":"visible"});
	$(".mobile_menu_section").css({"transform" : "translateY(-100%)"});
	
}