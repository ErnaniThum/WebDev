var main = function () {
	"use strict";
	
	$(".comment-input button").on("click", function (event) {
		var $new_comment = $("<p>");
		var $input;

		$input = $(".comment-input input").val();
		if ($input != ""){
			$new_comment.text($input);
			$new_comment.hide();$(".comments").append($new_comment);
			$(".comment-input input").val("");
			$(".inputAlert").attr('id', '');
		}
		else $(".inputAlert").attr('id', 'showAlert'); 
	});

	$(".comment-input input").on("keypress", function(event){
		// console.log("Button code " + event.keyCode + " pressed.");
		var $new_comment = $("<p>");
		var $input;
		
		if (event.keyCode == 13){
			$input = $(".comment-input input").val();
			if ($input != ""){
				$new_comment.text($input);
				$(".comments").append($new_comment);
				$(".comment-input input").val("");
				$(".inputAlert").attr('id', '');
			}
			else $(".inputAlert").attr('id', 'showAlert'); 

		}
	});
};

$(document).ready(main);

