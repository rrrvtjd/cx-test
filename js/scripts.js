// JavaScript Document

	$(document).ready(function(){
	$('.options > li:last-child').css('border-right','0');
	$('.expand').click(function(){
		
		$('.expand').toggleClass('collapse');
		$('.context').toggleClass('context-large');
		
		if ($('#context').css('font-size') == '16px') {
			  $('.expand').html('Smaller type');
		 }
		 else {
			  $('.expand').html('Larger type');
		 };
		
	});
	

});