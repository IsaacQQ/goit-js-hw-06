let counterValue = (Number = 0);

const clickAdd = document.getElementById("counter");
// const btns = clickAdd.childNodes;

let county = document.getElementById("value");

// const addy = clickAdd.firstElementChild;

// const decrease = clickAdd.lastElementChild;

const addy = document.querySelector('button[data-action="decrement"]')
const decrease = document.querySelector('button[data-action="increment"]')

addy.addEventListener("click", onClick);
function onClick() {
  county.textContent = counterValue -= 1;
}

decrease.addEventListener("click", onclick);
function onclick() {
  county.textContent = counterValue += 1;
}
