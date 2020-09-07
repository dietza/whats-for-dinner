
// var sides = [
//   'brussel sprouts',
//   'roast potatoes',
//   'fried avocado',
//   'curried zucchini fritters'
// ];


// radio button selectors:
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var dessertRadio = document.querySelector('#dessert');


// buttons:
var addRecipeButton = document.querySelector('.add-recipe-button');
var letsCookButton = document.querySelector('.lets-cook-button');


// sections:
var cookPotIcon = document.querySelector('.cookpot-icon');



// form inputs:



// event listeners:
addRecipeButton.addEventListener('click',addRecipe);


// functions:

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function addRecipe() {

}

console.log(getRandomIndex(sides));
