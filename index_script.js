let slide_Index = 1;
show_Slides(slide_Index);


function plus_Slides(n){
	show_Slides(slide_Index += n);
}


function show_Slides(n){
	let get_Grid_Set = document.getElementsByClassName("grid_set");
	
	let i;
	
	if(n > get_Grid_Set.length){
		slide_Index = 1;
	}
	if(n < 1){
		slide_Index = get_Grid_Set.length;
	}
	
	for(i = 0; i < get_Grid_Set.length; i++){
		get_Grid_Set[i].style.display = "none";
	}
	
	get_Grid_Set[slide_Index - 1].style.display = "inline";
	
}


let review_Slide_Index = 1;
show_Review_Slides(review_Slide_Index);

function push_Review_Slides(k){
	show_Review_Slides(review_Slide_Index += k);
}

function show_Review_Slides(k){
	let get_Tenth_Section_Slide_Item = document.getElementsByClassName("tenth_section_slide_item");
	
	if(k > get_Tenth_Section_Slide_Item.length){
		review_Slide_Index = 1;
	}
	let j;
	for(j = 0; j < get_Tenth_Section_Slide_Item.length; j++){
		get_Tenth_Section_Slide_Item[j].style.display = "none";
	}
	get_Tenth_Section_Slide_Item[review_Slide_Index - 1].style.display = "inline";
	
	
}

let set_Interval = setInterval(push_Review_Slides,7000,1);



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




const get_First_Section_Header = document.querySelector(".first_section_text");

function first_Section_Animation(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("first_section_text_animated");
		}else{
			entry.target.classList.remove("first_section_text_animated");
		}
	});
}



first_Section_Root = 
{
	root : null,
	rootMargin : "5px",
	threshhold : 0.8,
	
}

const first_Section_Animation_API = new IntersectionObserver(first_Section_Animation, first_Section_Root);

first_Section_Animation_API.observe(get_First_Section_Header);







//TEXT ANIMATION


const ecotourism_Text = document.querySelector(".eight_section_text");

function animate_Ecotourism_Text(entries){
    entries.forEach(
	    (entry) => {
            if(entry.isIntersecting){
			    entry.target.classList.add("char_animated");
			}else{
				
			    entry.target.classList.remove("char_animated");
			}

		});
}


const observe_Ecotourism_Text_API = new IntersectionObserver(animate_Ecotourism_Text);
observe_Ecotourism_Text_API.observe(ecotourism_Text);