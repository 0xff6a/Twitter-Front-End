$(document).ready(function(){

	$('#dialogue').dialog({ autoOpen: false, resizable: false, title: "Compose new tweet" });

	$('#new-tweet-nav-icon').click( function(event){
		
		event.preventDefault();

		$('#dialogue').dialog('open');


	// $('<li>'+ game.winningMessage()+'</li>').prependTo('#result').slideDown();
	// $('#result li:gt(3)').fadeOut(function(){
	// 	$(this).remove();
	// });

	// $('#score-counter').text('Human: ' + game.player1WinLoseDraw[0] +  ' | Computer: '+ game.player1WinLoseDraw[1] + ' | Draw: ' +game.player1WinLoseDraw[2]  ).slideDown();

	});
});
