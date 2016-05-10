var main = function () {
	"use strict";
	
	$(".tabs li:nth-child(1) a").on("click", function () {
		$(".tabs li a").removeClass("active");
		$(".tabs li:nth-child(1) a").addClass("active");
		//$("main .content").empty();
		return false;
	});
	$(".tabs li:nth-child(2) a").on("click", function () {
		$(".tabs li a ").removeClass("active");
		$(".tabs li:nth-child(2) a").addClass("active");
		//$("main .content").empty();
		return false;
	});
	$(".tabs li:nth-child(3) a").on("click", function () {
		$(".tabs li a").removeClass("active");
		$(".tabs li:nth-child(3) a").addClass("active");
		//$("main .content").empty();
		return false;
	});
};

$(document).ready(main);