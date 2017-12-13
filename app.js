$(document).ready(function() {

  // Set min and max mumber of quote
  const minNum = 0;
  const maxNum = 102;

  // Randomize quotes according to index
  const randomQuoteID = (() =>
  Math.floor(Math.random() * (maxNum - minNum) + minNum));

  // Array to store quotes data from JSON
  const quoteArr = [];

  // Get random quote
  function getRandomQuote() {
    let ind = randomQuoteID();
    $('#getQuote').text(quoteArr[ind].quote);
    $('#getCite').text('- ' + quoteArr[ind].author);
  }

  // load quotes JSON
  const url = 'https://api.myjson.com/bins/tdbv7';

  $.getJSON(url, function(data) {
    for(let i = 0; i < maxNum; i++) {
      quoteArr.push(data.quotes[i]);
    }
    // Get random quote when starting page
    getRandomQuote();
  });

  // Get random quote when click button
  $('#generateQuote').on('click', function(e) {
    e.preventDefault();
    getRandomQuote();
    getRandomColor();
  });

  // Get random color from bgColor
  getRandomColor();

  function getRandomColor() {
    let colorR = Math.floor(Math.random() * 150 + 50);
    let colorG = Math.floor(Math.random() * 150 + 50);
    let colorB = Math.floor(Math.random() * 150 + 50);
    let color = "rgb(" + colorR + "," + colorG + "," + colorB + ")";

    let listOfBgColor = 'html, body, #generateQuote';
    let listOfTextColor = '.card-block, .social-icon';

    $(listOfBgColor).css('background-color', color);
    $(listOfTextColor).css('color', color);
  }

  // Post on Twitter
  $('.twitter-shareBtn').click(function() {
    let getQuote = '"' + $('#getQuote').text() + '" ' + $('#getCite').text();
    let twitterLink = 'https://twitter.com/intent/tweet?text=' + getQuote + '&hashtags=quotes';
    $(this).attr('href', twitterLink);
  });

});
