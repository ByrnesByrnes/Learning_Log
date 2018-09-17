$('body').hide().fadeIn(1000)
$('#wells2*').hide()
$('#p-date-added*').hide()

var pickElement = $('#elClass1*')
// HighLight a a child option and remove it 

$(function checking() {
	
	var $elClass = $(pickElement);

	$elClass.on('mouseover click', function() {
		$(this).siblings('p').fadeIn(500);	
	});
	$elClass.on('mouseout', function() {
		$(this).siblings('p').fadeOut(200);
	});
});

//var elWells = window.querySelector('wells')

