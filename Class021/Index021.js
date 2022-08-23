document.onkeydown = handle;

function handle(e) {
  const keyboard = document
    .getElementById("keyboard")
    .getElementsByTagName("li");

  const pressedLetter = e.key.toUpperCase();
  console.log([pressedLetter]);
  let foundElement;

  for (let index = 0; index < keyboard.length; index++) {
    if (keyboard[index].innerText.toUpperCase() === pressedLetter) {
      foundElement = keyboard[index];
      foundElement.classList.add("pressed-button");
      returnBackground(foundElement, 500);
    }
  }
}

function returnBackground(elem, interval) {
  setTimeout(() => {
    elem.classList.remove("pressed-button");
  }, interval);
}

