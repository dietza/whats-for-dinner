// data arrays:
var sidesArr = [
  'Spicy Brussel Sprouts',
  'Roasted Potatoes',
  'Fire-roasted Tomatoes',
  'Fried Avocado',
  'Curried Zucchini Fritters',
  'Miso Glazed Carrots',
  'Kalidescope Salad',
  'Sweet Potato Fries',
  'Cilantro-lime Rice',
  'Garlic Butter Mushrooms',
  'Quinoa',
  'Hummus & Crudites',
  'Pan Tomate'
];

var mainDishesArr = [
  'Minestrone Soup',
  'Butternut Squash Soup',
  'Sriracha Zoodle Lo Mein',
  'Flaffel Wrap',
  'Chickpea Chicken Salad Sandwich',
  'Cauliflower Tacos',
  'Thai Yellow Curry',
  'Hot Red Curry',
  'Fajitas',
  'Grilled Veggie Pizza',
  'Ramen',
  'Empanadas',
  'Deluxe Avocado Toast',
  'Quesadilla',
  'Oven-baked Sweet Potato',
  'Spring Rolls'
];

var dessertsArr = [
  'Apple Pie',
  'Raspberry Tart',
  'Chocolate Zucchini Cupcakes',
  'Banana Bread',
  'Peach Cobbler',
  'Tiramisu',
  'Pineapple Upside-down Cake',
  'Baklava',
  'Flan',
  'Pumpkin Pie',
  'Key Lime Pound Cake',
  'Chocolate Chip Blondies'
];


// radio button selectors:
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var dessertRadio = document.querySelector('#dessert');
var entireMealRadio = document.querySelector('#entire-meal');


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


// Iteration 1:

// 

// Iteration 2:

//

// Iteration 3:

//









console.log(getRandomIndex(sidesArr));
