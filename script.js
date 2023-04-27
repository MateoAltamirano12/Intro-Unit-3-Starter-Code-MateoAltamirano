/* Declare variables below to save the different sections (divs) of your story*/
let optionone = document.querySelector(".option-one");
let optiontwo = document.querySelector(".option-two");
let optiononescreen = document.querySelector(".option-one-screen");
let optiontwoscreen = document.querySelector(".option-two-screen");
let storyopening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let title = document.querySelector(".title");
let body = document.querySelector("body");
let kyogretext = document.querySelector(".kyogretext");
let groudontext = document.querySelector(".groudontext");
let kyogretext2 = document.querySelector(".kyogretext2");
let groudontext2 = document.querySelector(".groudontext2");
let kyogreimg = document.querySelector(".kyogreimg");
let groudonimg = document.querySelector(".groudonimg");
let zapdosimg = document.querySelector(".zapdosimg");
let zekromimg2 = document.querySelector(".zekromimg2");





buttons.onclick = function() {
  storyopening.style.display = "none";
  optionone.style.display = "none;"
  buttons.style.display = "none";
  title.style.display = "none";
};


optionone.onclick = function() {
  optiononescreen.style.display = "block";
  kyogretext.innerHTML = "Water it is!";
};

optiontwo.onclick = function() {
  optiontwoscreen.style.display = "block";
  groudontext.innerHTML = "Ground it is!";
};

groudonimg.onclick = function() {
  groudontext.innerHTML = "Your opponent ended up being Zekrom!";
  groudontext2.innerHTML = "Zekrom's electricity doesn't effect your Groudon, making it an easy fight for you!";
  zekromimg2.style.display = "block";
  groudonimg.style.display = "none";
};


kyogreimg.onclick = function() {
  kyogretext.innerHTML = "Your opponent ended up being Zapdos!";
  kyogretext2.innerHTML = "Since water is weak to electricity, Kyogre couldn't put up a good fight, and fainted. Try again :(";
  kyogreimg.style.display = "none";
  zapdosimg.style.display = "block";
};


function bigimg(x) {
  x.style.width = "610px";
  x.style.height = "610px";
}

function normalimg(x) {
  x.style.width = "600px";
  x.style.height = "600px";
}
