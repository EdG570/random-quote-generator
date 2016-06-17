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
  },
  {
    quote: "Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.",
    source: "Bruce Lee",
    citation: "www.goodreads.com/quotes"
  }
];

// array for storing previous random numbers
var quotesHistory = [];

// Helper function that creates random numbers
var getRandomNumber = function() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var checkedRandomNum = checkNumber(randomNumber);
  return checkedRandomNum;
};

// Checks to see if the last random number was the same as current
var checkNumber = function(num) {
  if(quotesHistory.length === 0) {
    quotesHistory.push(num);
  }  
  else if(quotesHistory.length === quotes.length) {
    quotesHistory = [];
    quotesHistory.push(num);
  }
  else {
    for (var i = 0; i < quotesHistory.length; i++) {
      if(quotesHistory[i] === num) {
        num = getRandomNumber();
        checkNumber(num);
      }
    }
  }

  return num;
};

// Randomly selects a quote from the quotes arrray
var getRandomQuote = function() {
  var randomNumber = getRandomNumber();
  //lastRandomNumber = randomNumber;
  return quotes[randomNumber];
};

// Randomly changes background color between quotes
var changeColor = function() {
  var colors = ["orange", "red", "yellow", "blue", "green"];
  var randomColorNum = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColorNum];
};

// Builds quote string then returns it to printQuote
var buildQuoteString = function(selectedQuote) {
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

  return quoteString;
};

// Gets a random quote, builds a string, changes body background color, then displays content
var printQuote = function() {
  var selectedQuote = getRandomQuote();
  var quoteString = buildQuoteString(selectedQuote);
  changeColor();
  document.getElementById('quote-box').innerHTML = quoteString;
};

// Changes quote every 8 seconds
setInterval(function() { printQuote(); }, 8000);

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);




