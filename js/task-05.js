const nameSpan = document.querySelector("#name-output");
const input = document.querySelector("#name-input");
const onInput = (event) => {
  nameSpan.textContent = event.currentTarget.value;
  event.currentTarget.value.trim() === ""
    ? (nameSpan.textContent = "Anonymous")
    : null;
};
input.addEventListener("input", onInput);
