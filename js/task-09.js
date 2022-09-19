function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", OnClick);

function OnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.replaceChildren(getRandomHexColor());
}
