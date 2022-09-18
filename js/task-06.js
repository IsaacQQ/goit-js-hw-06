const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlur);

function onBlur(evt) {
    if (evt.currentTarget.value.length == input.dataset.length) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}