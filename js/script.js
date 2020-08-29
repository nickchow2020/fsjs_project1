/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote:"Those who don’t believe in magic will never find it",
    source:"The Minpins",
    citation:"Roald Dahl",
    year:"2009",
    price: "$7.99"
  },
  {
    quote:"It is better to be hated for what you are than to be loved for what you are not",
    source:"Autumn Leaves",
    citation:"André Gide",
  },
  {
    quote:"The moment you doubt whether you can fly, you cease forever to be able to do it",
    source:"Peter Pan",
    year:"2015"
  },
  {
    quote:"Hoping for the best, prepared for the worst, and unsurprised by anything in between",
    source:"I Know Why the Caged Bird Sings ",
  },
  {
    quote:"And, now that you don’t have to be perfect you can be good",
    source:"East of Eden ",
    citation:"John Steinbeck",
    year:"1952",
  },
  {
    quote:"We all require devotion to something more than ourselves for our lives to be endurable",
    source:"Being Mortal "
  },
  {
    quote:"Even the darkest night will end and the sun will rise",
    source:"Les Misérables",
    citation:"Victor Hugo",
    year:"2013",
    price: "$9.99"
  }
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr){
  const randomIndex = Math.floor(Math.random() * (arr.length + 1));
  const randonQuote = arr[randomIndex];
  return randonQuote;
}


/***
 * `printQuote` function
***/
function printQuote(){
  const selectQuotes = getRandomQuote(quotes);
  const quoteArea = document.getElementById("quote-box");
  let printHTML = "";
  if(selectQuotes.hasOwnProperty("price")){
    printHTML = `<p class="quote">${selectQuotes.quote}</p>
                 <p class="source">${selectQuotes.source}<span class="citation">${selectQuotes.citation}</span><span class="year">${selectQuotes.year}</span><span class="price">${selectQuotes.price}</span></p>`
  }else if(selectQuotes.hasOwnProperty("citation") && selectQuotes.hasOwnProperty("year")){
    printHTML = `<p class="quote">${selectQuotes.quote}</p>
                 <p class="source">${selectQuotes.source}<span class="citation">${selectQuotes.citation}</span><span class="year">${selectQuotes.year}</span></p>`
  }else if(Object.keys(selectQuotes) === 3 && selectQuotes.hasOwnProperty("citation")){
    printHTML = `<p class="quote">${selectQuotes.quote}</p>
                 <p class="source">${selectQuotes.source}<span class="citation">${selectQuotes.citation}</span></p>`
  }else if(Object.keys(selectQuotes) === 3 && selectQuotes.hasOwnProperty("year")){
    printHTML = `<p class="quote">${selectQuotes.quote}</p>
    <p class="source">${selectQuotes.source}<span class="citation">${selectQuotes.year}</span></p>`
  }else{
    printHTML = `<p class="quote">${selectQuotes.quote}</p>
                 <p class="source">${selectQuotes.source}</p>`
  }
  quoteArea.innerHTML = printHTML;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
  automatically refresh quote and background color function 
***/

function randomBg(){
  const body = document.querySelector("body");
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z=  Math.floor(Math.random() * 256);
  const rgbValue = `${x},${y},${z}`;
  body.style.background = `rgb(${rgbValue})`;b
}

setInterval(printQuote,5000);
setInterval(randomBg,5000);