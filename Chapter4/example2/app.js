
var main = function () {
	"use strict";
	
	function addCommentFromInputBox() {
		var $new_comment;
		if ($(".comment-input input").val() !== "") {
			$new_comment = $("<p>").text($(".comment-input input").val());
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input input").val("");
			console.log($new_comment);
			$(".inputAlert").fadeOut();
		}
		else $(".inputAlert").fadeIn();
	};

	function removeCommentFromInputBox() {
	   var variable= 0;
	   console.log($('.comments p:nth-child(1)'));
	   
	   $('.comments p:nth-child(1)').fadeOut("slow", function(){
	   		$('.comments p:nth-child(1)').remove();
	   });
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