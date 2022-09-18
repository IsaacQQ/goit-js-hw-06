//счёт категорий
const categoryCounter = document.getElementById("categories").getElementsByTagName('ul').length;
console.log("Number of categories: ", categoryCounter)




const list1 = document.getElementById('categories');
// [...list1.children].forEach(elem => {
//   console.log(elem.children[0].textContent);
//   console.log(elem.children[1].children.length);
// });
[...list1.children].forEach(elem => {
  console.log(`Category: ${elem.children[0].textContent}`);
  console.log(`Elements: ${elem.children[1].children.length}`);
});
