// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

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
  }
];

// Randomly selects a quote from the quotes arrray
var getRandomQuote = function() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

var printQuote = function() {
  var selectedQuote = getRandomQuote();
  console.log(selectedQuote);
  // if (selectedQuote["year"] === undefined && selectedQuote["citation"] === undefined) {
    
  // }
};

printQuote();



