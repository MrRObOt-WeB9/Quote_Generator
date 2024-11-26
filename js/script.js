var outputArea = document.getElementById("myRow");
var prevIndex = null;
var quotes = [
  {
    quote:
      "\"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\"",
    author: "--Bernard M. Baruch",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "--Mae West",
  },
  {
    quote: `
    You've gotta dance like there's nobody watching, 
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.`,
    author: "--William W. Purkey",
  },
  {
    quote:
      '"It\'s not what happens to you, but how you react to it that matters."',
    author: "--Epictetus",
  },
];

function getQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  if (prevIndex == null) {
    prevIndex = randomIndex;
  } else if (prevIndex == randomIndex) {
    while (prevIndex == randomIndex) {
      randomIndex = Math.floor(Math.random() * quotes.length);
    }
  }
  prevIndex = randomIndex;
  outputArea.innerHTML = `
    <p class="fs-3">${quotes[randomIndex].quote}</p>
    <p class="fs-3">${quotes[randomIndex].author}</p>
  `;
}
