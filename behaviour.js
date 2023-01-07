let step = 1;
// add parsing from audio folder
const phrases = ["MEOW!", "HELLO HUMAN", "PURRRR", "MMMMMM", "UWU"];
let screenWidth;
let screenHeight;

window.addEventListener("load", (event) => {
  setInterval(moveCat, 60);
  document.getElementById("kitty").addEventListener("click", talkCat);
  document.getElementById("kitty").addEventListener("click", dragCat);
  screenWidth = screen.width;
  screenHeight = screen.height;
});

function moveCat() {
  let cat = document.getElementById("kitty");
  // sizes of the kitty
  catWidth = cat.clientWidth;
  catHeight = cat.clientHeight;

  // handle side to side movement of the kitty
  cat.style.left = (cat.offsetLeft + step) + "px";
  if (cat.offsetLeft + catWidth >= screenWidth) step = -1;
  else if (cat.offsetLeft <= 0) step = 1;
  console.log(`moving ${cat.style.left}`);
  
  // handle falling movement of the kitty
  if (cat.offsetTop + catHeight <= screenHeight) {
    cat.style.top = (cat.offsetTop + step) + "px";
    console.log(`dropping ${cat.style.top} top: ${catHeight}`);
  }
}

function talkCat() {
  // play a cat sound effect
  // https://stackoverflow.com/questions/9419263/how-to-play-audio
  console.log("MEOW!");
}

function dragCat() {
  // make cat follow cursor movement
  // https://stackoverflow.com/questions/7143806/make-an-image-follow-mouse-pointer
  console.log("dragging");
}