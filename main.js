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
var radioButtonsArr = document.querySelectorAll('.category');
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var dessertRadio = document.querySelector('#dessert');
var entireMealRadio = document.querySelector('#entire-meal');


// buttons:
var addRecipeButton = document.querySelector('.add-recipe-button');
var letsCookButton = document.querySelector('.lets-cook-button');


// sections:
var cookPotIcon = document.querySelector('.cookpot-icon');
var resultMessage = document.querySelector('.result-message');
var message = document.querySelector('.message');


// event listeners:
letsCookButton.addEventListener('click', suggestRandomDish)



function getRandomIndex(array) {

  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];

}


function suggestRandomDish() {

  for (i = 0; i = radioButtonsArr; i++) {

    if (radioButtonsArr[i].checked === true) {
      var selectedCategory = radioButtonsArr[i].value;
    };

    var suggestedDish = getRandomIndex(selectedCategory);

  }

  resultMessage.innerText = suggestedDish;

  message.classList.remove('.hidden');
  resultMessage.classList.remove('.hidden');

}



// Iteration 1:

// When a user selects a RADIO BUTTON (dish category),
// then CLICKS the "Let's Cook" BUTTON,
// a RANDOM dish (random index value) from the appropriate array
// is returned in the result-box

///// identify WHICH radio button has been selected,
///// use the VALUE of the selected radio button to pass in as the identified ARRAY,
///// from which we will SELECT and RETURN a RANDOM (value) dish.
