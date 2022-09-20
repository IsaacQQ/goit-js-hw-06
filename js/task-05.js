const nameSpan = document.querySelector("#name-output");
const input = document.querySelector("#name-input");
const onInput = (event) => {
  nameSpan.textContent = event.currentTarget.value.trim() || "Anonymous"
  
};
input.addEventListener("input", onInput);
