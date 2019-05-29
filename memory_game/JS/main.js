// the variables
var cards = ["queen", "queen", "king","king"];
var cardsInPlay = [];


// check for match //
function checkForMatch()
{
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} 
  else {
  console.log("Sorry, try again.");
}
}

// function for choose card //
function flipCard(cardID)
{
console.log("User flipped " + cards[cardID] );

// insert the elemnt to array //
cardsInPlay.push(cards[cardID]);


// call the function //
if (cardsInPlay.length === 2 )
{
	checkForMatch();

}

}

flipCard(1);
flipCard(3);


