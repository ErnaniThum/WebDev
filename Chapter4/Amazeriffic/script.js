var main = function () {
	"use strict";
	var $content;
	
	var toDos = [
		"Finish writing this book",
		"Take Gracie to the park",
		"Answer emails",
		"Prep for Monday's class",
		"Make up some new ToDos",
		"Get Groceries"
	];

	$(".tabs li a").toArray().forEach(function (element) {
		// create a click handler for this element
		$(element).on("click", function () {
			
			$(".tabs li a").removeClass("active");
			$(this).addClass("active");
			$("main .content").empty();
		
			if ($(this).parent().is(":nth-child(1)")) {
				//console.log("First Tab");
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.prepend($("<li>").append($("<p>").text(todo)));
				});
				$("div.content").append($content);
			} 

			else if ($(this).parent().is(":nth-child(2)")) {
				
				$content = $("<ul>");		
				
				toDos.forEach(function (todo) {
					$content.append($("<li>").append($("<p>").text(todo)));
				});
				$("div.content").append($content);
				
				} else if ($(this).parent().is(":nth-child(3)")) {

					$("div.content").append('<h3 class="addTitle">Add your things to do.</h3>');
					$("div.content").append('<input class="addInput "type="text" />');
					$("div.content").append('<button class="addButton">+</button>');
			}
			return false;
		});
	});
	
	//console.log($(".tabs li:first-child a"));
	$(".tabs li:nth-child(3) a").trigger("click");
};

$(document).ready(main);
