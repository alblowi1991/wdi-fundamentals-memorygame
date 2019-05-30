// the variables and Objects //
var cards = [{rank:"queen" , suit:"hearts"	, cardImage:"images/queen-of-hearts.png"	},{rank:"queen",suit:"diamonds"	, cardImage:"images/queen-of-diamond.png"	},{rank:"king" , suit:"hearts" , cardImage:"images/king-of-hearts.png"},{rank:"king" , suit:"diamonds" , cardImage:"images/king-of-diamonds.png"}];
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
console.log("User flipped " + cards[cardID].rank);
console.log(cards[cardID].suit);
console.log(cards[cardID].cardImage);


// insert the elemnt to array //
cardsInPlay.push(cards[cardID].rank);


// call the function //
if (cardsInPlay.length === 2 )
{
	checkForMatch();

}

}

flipCard(2);
flipCard(3);


