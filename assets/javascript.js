// pseudo code
/*

Only two users can play at the same time.
Both players pick either rock, paper or scissors. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.
The game will track each player's wins and losses.
Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.
Styling and theme are completely up to you. Get Creative!

script waits for choices made by both players. 

input is three buttons in each player area - rock paper or scissors

on document ready
var gameTracker = {
	'Player 1': '',
	'Player 2': '',
	p1wins: 0,
	p2wins: 0,
	ties: 0,
	message: 'Game begins when either Player 1 or Player 2 makes a choice.',
	chats: []
	}



 // send initial gameTracker object to db
 	if (db.ref().)
 	db.ref().set(gameTracker);
	
	
//watch firebase database
	db.on("value", function(snapshot){
		// does the data exist in firebase yet?		
		if (!snapshot.child('gameTracker').exists()
			// send initial object to Firebase
			db.ref().set(gameTracker);
		
		// now set variable to make interacting with firebase db easier
		gameDb = db.ref().val();

		// update chat area by looping through chats array for messages, prepending so newest are at the top
		// also adding class based on first 8 characters of chat string,which should be 'Player 1' or 'Player 2', replacing space with '+'

		$(gameDb.chats).each(function(index){
			var class = $(this).substring(0,8).replace(/ /+);
			$('#chatWindow').prepend('<p class="'+ class +'">'+$(this)[index]+'</p>')
			
		})

	});

  //set click event on buttons to triggers db update 
	
	$(".choice")  on click
		var thisPlayer = $(this).attr('data-player'); 
		gameDb.update({[thisPlayer]:$(this).attr("data-choice")})

	if (thisPlayer == 'Player 1')
		var lastToGo='Player 2'
	else
		var lastToGo='Player 1';

	$("#messageArea").text(thisPlayer+' has made a choice. Time to make yours, '+lastToGo)
	
//on 'chat' click event for each player, update chat array
	$('.chat').on('click',function(){
		gameDb.chats.push($(this).attr('data-player')+': '+$(this).val().trim());
		db.update({chats:gameTracker.chats})

	}); // end chat click function
	
	
	
	


	// check for chats
	

	if (data.child("p1choice") != '' && data.child("p2choice") != '')
		// both players have made their selections
		// continue this round
		if p1choice == rock
			if  p2choice == rock
				updateResult(tie)
				
			else if p2choice == paper
				updateResult(p2) 

	else 
		message: Waiting for player X to make a choice

function updateResult(result)
	if result == tie
		tie++
		message = 'It's a tie!';
	else if result == p2
		p2wins++
		message = 'Player 2 wins!'
	else if result == p1
		p1wins++;
		message = 'Player 1 wins!'
	messageArea.html(message);
	nextRound();

function nextRound():
 //after round, p1choice and p2choice need to be reset to '';
	round++
	p1choice = '';
	p2choice= '';
	messageArea.append('<p>Time for Round' + round+ '. Choose your weapon.</p>')

function reset()
	db.ref().set({});
	p1choice='';
	p2choice='';
	p1wins=0;
	p2wins=0;
	ties = 0;
	message='Game begins when either Player 1 or Player 2 makes a choice.';


variables
----------
p1choice
p2choice
p1wins
p2wins
ties
round 
message
*/

// firebase
var config = {
apiKey: "AIzaSyA3mNFDj-P109zHFz1IC3I5VBPHElDiokM",
authDomain: "rps-multiplayer-1b8dd.firebaseapp.com",
databaseURL: "https://rps-multiplayer-1b8dd.firebaseio.com",
storageBucket: "rps-multiplayer-1b8dd.appspot.com",
messagingSenderId: "121848291263"
};
firebase.initializeApp(config);

var db = database.firebase();

