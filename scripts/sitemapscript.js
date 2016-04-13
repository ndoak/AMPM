$ (document).ready(function () {
	$('.show-this').hide();
	$('.link-to').hover(function () {
		var $div = $('.show-this').eq($(this).index('.link-to'));
		$div.show();
		$('.show-this').not($div).hide();
	});		
});



/*
$ (document).ready(function () {
	$('.show-this').hide();

	$('.link-to').hover(function() {
		$('.show-this').show(1000)}, function(){
		$('.show-this').hide(1000);})
	});
*/
/*
$ (document).ready(function () {
	$('.link-to').hover(function() {$('.show-this2').show(1000)}, function()
	{$('.show-this2').hide(1000)});
	});

$ (document).ready(function () {
	$('.link-to').hover(function() {$('.show-this3').show(1000)}, function()
	{$('.show-this3').hide(1000)});
	});

$ (document).ready(function () {
	$('.link-to').hover(function() {$('.show-this4').show(1000)}, function()
	{$('.show-this4').hide(1000)});
	});

$ (document).ready(function () {
	$('.link-to').hover(function() {$('.show-this5').show(1000)}, function()
	{$('.show-this5').hide(1000)});
	});

$ (document).ready(function () {
	$('.link-to').hover(function() {$('.show-this6').show(1000)}, function()
	{$('.show-this6').hide(1000)});
	});
*/