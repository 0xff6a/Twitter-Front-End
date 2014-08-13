$(document).ready(function(){

	$('#dialogue').dialog({ autoOpen: false, resizable: false, title: "Compose new tweet" });

	$('#new-tweet-nav-icon').click( function(event){
		
		event.preventDefault();
		$('#dialogue').dialog('open');

	});

	$('#submit-tweet-button2').click( function(event){
		
		event.preventDefault();
		var newTweet = $('#pop-up-tweet-input').val();
		$('.stream-holder').prepend("	<section class='tweet-holder'><article class='tweet-body'>" 
			+ newTweet + "</article></section>").slideDown();
		$('#pop-up-tweet-input').val(' ');
		$('#dialogue').dialog('close');

	});

	$('#dashboard-tweet-box1').click( function() {

		event.preventDefault();
		
		$('#dashboard-tweet-input1').height(80);
		$('#dashboard-tweet-box1').height(140);
		$('#submit-tweet-button1').show();


	});

	$('#submit-tweet-button1').click( function(event) {
		event.stopPropagation();
		var newTweet = $('#dashboard-tweet-input1').val();
		
		$('#dashboard-tweet-input1').val(' ');
		$('#submit-tweet-button1').hide();
		$('#dashboard-tweet-input1').height(20);
		$('#dashboard-tweet-box1').height(50);

		$('.stream-holder').prepend("	<section class='tweet-holder'><article class='tweet-body'>" 
			+ newTweet + "</article></section>").slideDown();


	});
	
});
