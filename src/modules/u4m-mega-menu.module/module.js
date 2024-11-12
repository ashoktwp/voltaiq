$('.mobileTrigger').click(function() {
	$(this).next('.rightSec').slideToggle(250);
	$('html').toggleClass('menu-open');
	$('.deskHide .subMenu').slideUp(250);
	$('.deskHide .hs-subMenu').removeClass('child-open');
	return false;
});


$('.childTrigger').click(function() {
	$(this).parent().siblings('.hs-subMenu').removeClass('child-open');
	$(this).parent().siblings('.hs-subMenu').find('.subMenu').slideUp(250);
	$(this).next('.subMenu').slideToggle(250);
	$(this).parent().toggleClass('child-open');
	return false;
});
