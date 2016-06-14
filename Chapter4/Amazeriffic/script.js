// var main = function () {
// 	"use strict";
	
// 	$(".tabs li:nth-child(1) a").on("click", changePage);
// 	$(".tabs li:nth-child(2) a").on("click", changePage);
// 	$(".tabs li:nth-child(3) a").on("click", changePage); 
	
// 	function changePage(){

// 		$(".tabs li a").removeClass("active");
// 		$(this).addClass("active");
// 		console.log(this);
// 	}

// };

var main = function () {
	
	"use strict";
	
	var toDos [
		"Study",
		"Work",
		"Go to Market",
		"Catch the kids at school"
	];

	// tabs handler
	$(".tabs li a").toArray().forEach(function (element) {
		// create a click handler for this element
		$(element).on("click", function () {
			$(".tabs li a").removeClass("active");
			$(this).addClass("active");
			$("main .content").empty();
			return false;
		});
	});

	// adding more funcions

};

$(document).ready(main);