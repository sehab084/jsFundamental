// DATA TYPES - String, Number, Boolean, null, undefined
const name = "sehab";
const age = 18;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
//console.log(typeof rating);

// STRINGS
console.log(`My Name is ${name} and i am ${age}`);
const fruits = ["apples", "oranges", "pears", "grapes"];
fruits.push("make me");
fruits.unshift("hello");
//console.log(fruits);

const person = {
  firstName: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA"
  }
};
const { firstName, lastName } = person;
//console.log(lastName);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: false
  },
  {
    id: 2,
    text: "Dinner with wife",
    isComplete: true
  },
  {
    id: 3,
    text: "Meeting with boss",
    isComplete: true
  }
];

const isComplete = todos.filter(function(todo) {
  return todo.isComplete === true;
});
console.log(isComplete);
