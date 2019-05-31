// the variables and Objects //

var cards = [{rank:'queen' , suit:'hearts'	, cardImage:'images/queen-of-hearts.png'},{rank:'queen',suit:'diamonds'	, cardImage:'images/queen-of-diamonds.png'},{rank:'king' , suit:'hearts' , cardImage:'images/king-of-hearts.png'},{rank:'king' , suit:'diamonds', cardImage:'images/king-of-diamonds.png'}];
var cardsInPlay = [];
var x = 1; //intial value
var cardElement;
var s =0; // score
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create the game engine //

 function createBoard()
{




if (x ===1 )  // condtion ( [x=1]play first time , [x=0] restart game)
{

  //insert card image in html //

  for (var i = 0; i < cards.length; i++)
 {   
       
      cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
   document.getElementById('game-board').appendChild(cardElement); // here we send it to html 
 }
}

// set the card image to default
else 
{
  document.getElementById("logo").innerText= null;
      var images = document.getElementById("game-board").getElementsByTagName("img");
      cardsInPlay.length=0;
  for (var i = 0; i < images.length; i++) {
    images[i].src ="images/back.png";
}

for (var j = 0; j < cards.length; j++)
{
      cardElement.setAttribute('data-id',j);    
    cardElement.addEventListener('click',flipCard);
}
}
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function for choose card //

function flipCard()
{
	var cardId = this.getAttribute('data-id');




  
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// insert the elemnt to array //

cardsInPlay.push(cards[cardId].rank);




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 

// here we show the picture after user click  the card //

this.setAttribute("src",cards[cardId].cardImage);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// check if user cgoose two cards  //

if (cardsInPlay.length === 2 )
{
  

	checkForMatch();

}

// check if choose more than two card //
else if (cardsInPlay.length > 2)
{
alert("please choose only two card");

var ima = document.getElementById("game-board").getElementsByTagName("img");
var d = document.getElementById("game-board").getElementsByTagName("data-id")
//reset to default image of rest if card //
for (var i =0 ; i < 4 ; i++)
 {
  ima[i].src ="images/back.png";

 }
// empty the arrey so //
 cardsInPlay.length = 0;

// delete the message 
document.getElementById("logo").innerText= "";




}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// check for match //

function checkForMatch()
{
  if (cardsInPlay[0] === cardsInPlay[1]) {

  //popup the result //  
  alert("You found a match!");

  //print the result in the web or screen //
  document.getElementById("logo").innerText= "You found a match!";
  s= s+1;

  //insert the score to the html //
  document.getElementById("scoreWin").innerText= "Score: " + String(s); 

  x = 0;
 


} 
  else {

      //popup the result //  
  alert("Sorry, try again.");

    //insert the score to the html //
 document.getElementById("logo").innerText= "Sorry, try again.";


  x = 0;

  
}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 


// call the function //
createBoard();
