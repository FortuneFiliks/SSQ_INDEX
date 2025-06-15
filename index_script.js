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