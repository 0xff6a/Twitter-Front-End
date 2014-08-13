$(document).ready(function(){

	$('#dialogue').dialog({ autoOpen: false, resizable: false, title: "Compose new tweet" });

	$('#new-tweet-nav-icon').click( function(event){
		
		event.preventDefault();
		$('#dialogue').dialog('open');

	});

	$('.submit-tweet-button').click( function(event){
		
		event.preventDefault();
		var newTweet = $('#pop-up-tweet-input').val();
		$('.stream-holder').prepend("	<section class='tweet-holder'><article class='tweet-body'>" 
			+ newTweet + "</article></section>").slideDown();
		$('#pop-up-tweet-input').val(' ');
		$('#dialogue').dialog('close');

	});

	$('#dashboard-tweet-box1').click( function() {
		$('#dashboard-tweet-input1').height(80);
		$('#dashboard-tweet-box1').height(140);
	});



	// $('<li>'+ game.winningMessage()+'</li>').prependTo('#result').slideDown();
	// $('#result li:gt(3)').fadeOut(function(){
	// 	$(this).remove();
	// });

	// $('#score-counter').text('Human: ' + game.player1WinLoseDraw[0] +  ' | Computer: '+ game.player1WinLoseDraw[1] + ' | Draw: ' +game.player1WinLoseDraw[2]  ).slideDown();

	
});
