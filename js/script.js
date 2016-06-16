var quotes = [
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    source: "H. Jackson Brown, Jr.",
    citation: "BrainyQuote"
  },
  {
    quote: "Try not to become a man of success but a man of value.",
    source: "Albert Einstein",
    citation: "www.inspirational-quotes.info"
  },
  {
    quote: "Every artist was first an amateur",
    source: "Ralph Waldo Emerson",
    citation: "www.inspirational-quotes.info"
  },
  {
    quote: "I was always looking outside myself for strength and confidence, but it comes from within. It is there all of the time.",
    source: "Anna Freud",
    citation: "www.inspirational-quotes.info"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    citation: "www.inspirational-quotes.info"
  }
];

// variable for storing previous random number
var lastRandomNumber = null;

// Helper function that creates random numbers
var getRandomNumber = function() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var checkedRandomNum = checkNumber(randomNumber);
  return checkedRandomNum;
};

// Checks to see if the last random number was the same as current
var checkNumber = function(num) {
  while (num === lastRandomNumber) {
    num = getRandomNumber();
  }
  return num;
}

// Randomly selects a quote from the quotes arrray
var getRandomQuote = function() {
  var randomNumber = getRandomNumber();
  lastRandomNumber = randomNumber;
  return quotes[randomNumber];
};

// Gets a random quote, builds a string, then displays content
var printQuote = function() {
  var selectedQuote = getRandomQuote();
  var quoteString = "";
  if (selectedQuote["year"] === undefined && selectedQuote["citation"] === undefined) {
    quoteString = '<p class="quote">' + selectedQuote["quote"] + '</p> <p class="source">' + selectedQuote["source"] + ' </p>';  
  }
  else if (selectedQuote["year"] === undefined) {
    quoteString = '<p class="quote">' + selectedQuote["quote"] + '</p> <p class="source">' + selectedQuote["source"] + ' <span class="citation">' + selectedQuote["citation"] + '</span> </p>';
  } 
  else {
    quoteString = '<p class="quote">' + selectedQuote["quote"] + '</p> <p class="source">' + selectedQuote["source"] + ' <span class="citation">' + selectedQuote["citation"] + '</span> <span class="year">' + selectedQuote["year"] + '</span> </p>';
  }
  document.getElementById('quote-box').innerHTML = quoteString;
};

// Changes quote every 10 seconds
setInterval(function() { printQuote(); }, 10000);

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);




