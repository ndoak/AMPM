$ (document).ready(function () {
	$('.show-this').hide();
	$('.link-to').hover(function () {
		var $div = $('.show-this').eq($(this).index('.link-to'));
		$div.show();
		$('.show-this').not($div).hide();
	});		
});


