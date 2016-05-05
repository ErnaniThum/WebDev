var main = function () {
	"use strict";
	$(".comment-input button").on("click", function (event) {
		var $new_comment = $("<p>");
		var $input;
		$input = $(".comment-input input").val();
		$new_comment.text($input);
		$(".comments").append($new_comment);

	});
};

$(document).ready(main);

