$(function () {
	$(".carousel").carousel({interval: 4000});
	$("#maxxCarousel").click(function () {
		if ($("#maxxCarousel").children("i").hasClass("fa-pause")) {
			$(".carousel").carousel("pause");
			$("#maxxCarousel").children("i").removeClass("fa-pause");
			$("#maxxCarousel").children("i").addClass("fa-play");
		} else {
			$(".carousel").carousel("cycle");
			$("#maxxCarousel").children("i").removeClass("fa-play");
			$("#maxxCarousel").children("i").addClass("fa-pause");
		}
	});
});

$(window).scroll(function () {
	let scroll = $(window).scrollTop();
	if (scroll < 900) {
		$(".fixed-top").css("background", "transparent");
	} else {
		$(".fixed-top").css("background", "#bb1f25");
	}
});
