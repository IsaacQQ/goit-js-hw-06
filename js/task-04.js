let counterValue = Number = 0

const clickAdd = document.getElementById('counter');
const btns = clickAdd.childNodes
console.log(btns)

let county = document.getElementById('value')

const addy = clickAdd.firstElementChild
console.log(addy) 

const decrease = clickAdd.lastElementChild
console.log(decrease) 


addy.addEventListener('click', onClick)
function onClick() {
   county.textContent = counterValue -= 1

}
console.log(counterValue)


decrease.addEventListener('click', onclick)
function onclick() {
    county.textContent = counterValue += 1
}