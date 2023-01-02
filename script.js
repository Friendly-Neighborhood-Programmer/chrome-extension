let step = 1;
const phrases = ["MEOW!", "HELLO HUMAN", "PURRRR", "MMMMMM", "UWU"];
let screenWidth;
let screenHeight;

window.addEventListener("load", (event) => {
  document.getElementById("kitty").addEventListener("click", talkCat);
  setInterval(moveCat, 6);
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
  console.log("MEOW!");
}