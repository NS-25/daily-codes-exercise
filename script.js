//1#
// function codeEveryDay() {
//   console.log("Nyunt Sein code everyday!")
// }

// codeEveryDay();

// 2.Add Two Number



// store input number
// const num1 = parseInt(prompt('Enter your first number'));
// const num2 = parseInt(prompt('Enter the second number'));

// // add two number 
// const sum = num1 + num2;

// //Display the sum
// document.getElementById('result').innerHTML = `The sum of ${num1} and ${num2} is ${sum}`;

// LeetCode Questions /////
// Write a function createCounter. It should accept an initial integer init.It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
//   decrement() reduces the current value by 1 and then returns it.
//     reset() sets the current value to init and then returns it.


//       Example 1:

// Input: init = 5, calls = ["increment", "reset", "decrement"]
// Output: [6, 5, 4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// Answer:

let createCounter = (init) => {
  let num = init;
  return {
    increment: () => { return ++num },
    reset: () => { return num = init },
    decrement: () => { return --num }
  }
}

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
