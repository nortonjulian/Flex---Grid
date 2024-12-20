let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
const mainTitle = document.getElementById('main-title')
mainTitle.textContent = "Welcome to DOM's Homepage!"


  // Part 2
document.body.style.backgroundColor = "light blue"



  // Part 3
const favThings = document.getElementById('favorite-things')
favThings.lastElementChild.remove()

  // Part 4
const specTitle = document.querySelectorAll('special-title')
specTitle.forEach(title => {
  title.style.fontsixe = '2rem'
})

  // Part 5
const pastRaces = document.getElementById('past-races')
const races = pastRaces.querySelectorAll('li')
races.forEach(race => {
  if(race.textContent === "Chicago"){
    race.remove()
  }
})
  // Part 6
const newCity = document.createElement('li')
newCity.textContent = "New York"
pastRaces.appendChild(newCity)

  // Part 7
const mainDiv = document.querySelector('.main')
const newBlogPost = document.createElement('div')
newBlogPost.className = "blog-post purple"
newBlogPost.innerHTML = `<h1>New York</h1><p>I raced down Times Square in my car!</p>`;
mainDiv.appendChild(newBlogPost)

  // Part 8
const quoteTitle = document.getElementById('quote-title')
quoteTitle.addEventListener('click', randomQuote)

  // Part 9
const blogPosts = document.querySelectorAll("blog-post")
blogPosts.forEach(post => {
  post.addEventListener('mouseover', () => {
    post.classList.toggle('red')
  });
  post.addEventListener('mouseenter', () => {
    post.classList.toggle('purple')
  })
 })
});
