
var main = function () {
	"use strict";
	
	var addCommentFromInputBox = function () {
		var $new_comment;
		if ($(".comment-input input").val() !== "") {
			$new_comment = $("<p>").text($(".comment-input input").val());
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input input").val("");

			$(".inputAlert").hide();
		}
		else $(".inputAlert").fadeIn();
	};

	function removeCommentFromInputBox() {
		
		var lastParagraph = $(".comments p").size();
		if (lastParagraph > 0){
			$(".comments p")[lastParagraph-1].remove();
		}
	};

	// Trigger click message field
	$("button.add").on("click", function (event) {
		addCommentFromInputBox();
	});

	$("button.remove").on("click", function (event) {
		removeCommentFromInputBox();
	});
	
	// Trigger 
	$(".comment-input input").on("keypress", function (event) {
		if (event.keyCode === 13) {
			addCommentFromInputBox();
		}
	});
};

$(document).ready(main);

// var main = function () {
// 	"use strict";
	
// 	$(".comment-input button").on("click", function (event) {
// 		var $new_comment = $("<p>");
// 		var $input;

// 		$input = $(".comment-input input").val();
// 		if ($input != ""){
// 			$new_comment.text($input);
// 			$new_comment.hide();$(".comments").append($new_comment);
// 			$(".comment-input input").val("");
// 			$(".inputAlert").attr('id', '');
// 		}
// 		else $(".inputAlert").attr('id', 'showAlert'); 
// 	});

// 	$(".comment-input input").on("keypress", function(event){
// 		// console.log("Button code " + event.keyCode + " pressed.");
// 		var $new_comment = $("<p>");
// 		var $input;
		
// 		if (event.keyCode == 13){
// 			$input = $(".comment-input input").val();
// 			if ($input != ""){
// 				$new_comment.text($input);
// 				$(".comments").append($new_comment);
// 				$(".comment-input input").val("");
// 				$(".inputAlert").attr('id', '');
// 			}
// 			else $(".inputAlert").attr('id', 'showAlert'); 

// 		}
// 	});
// };

// $(document).ready(main);

