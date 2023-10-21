'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // return index 
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


const arr = [1, 2, 3];

const b = arr[1];
const a = arr[0];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
// console.log(arr);

let [first, second] = restaurant.mainMenu;
console.log(first, second);

// let temp = first;
// first = second;
// second = temp;
// console.log(first, second)

// instead of creating a temp variable we can do like below
[first, second] = [second, first];
console.log(first, second);


// Receive 2 values to return from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse)


