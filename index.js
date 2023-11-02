const userInputString = prompt(
  "Please enter some integers separated by commas."
);

const stringArray = userInputString.split(",");

const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

function getLength(numbers) {
  return numbers.length;
}

function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function getMean(numbers) {
  const sum = getSum(numbers);
  return sum / numbers.length;
}

function getMin(numbers) {
  return Math.min(...numbers);
}

function getMax(numbers) {
  return Math.max(...numbers);
}

function getRange(numbers) {
  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max - min;
}

function getEvens(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

function getOdds(numbers) {
  return numbers.filter((num) => num % 2 !== 0);
}
