document.addEventListener('DOMContentLoaded', function() {

const inputField = document.getElementById('name-input');

inputField.addEventListener('input',function() {

document.getElementById('name-output').innerHTML = inputField.value;
})
});
