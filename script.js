//1#
// function codeEveryDay() {
//   console.log("Nyunt Sein code everyday!")
// }

// codeEveryDay();

// 2.Add Two Number



// store input number
const num1 = parseInt(prompt('Enter your first number'));
const num2 = parseInt(prompt('Enter the second number'));

// add two number 
const sum = num1 + num2;

//Display the sum
document.getElementById('result').innerHTML = `The sum of ${num1} and ${num2} is ${sum}`;
