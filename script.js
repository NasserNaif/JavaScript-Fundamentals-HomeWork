// Calculate area of a rectangle

let rectangleLength = 30;
let rectangleWidth = 20;
console.log(
  `The area of the ${rectangleLength} * ${rectangleWidth} is: ${
    rectangleLength * rectangleWidth
  }`
);

// The Temperature Converter
// C To F
let celsius = 30;
let ConvertCelsiusTofahrenheit = celsius * 1.8 + 32;
console.log(`${celsius}°C is ${ConvertCelsiusTofahrenheit}°F`);
// F To C
let fahrenheit = 100;
let ConvertfahrenheitTocelsius = (fahrenheit - 32) / 1.8;
console.log(`${fahrenheit}°F is ${ConvertfahrenheitTocelsius}°C`);

// Numbers' summations
let Numbers = [23, 54, 32, 87, 47];
let sum = 0;
for (let i = 0; i < Numbers.length; i++) {
  sum += Numbers[i];
}
console.log(`the sum of this array ${Numbers} is : ${sum}`);

// Maximum number
let arr = [16, 4, 2, 0, 19, 6];
let MaxArr = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > MaxArr) {
    MaxArr = arr[i];
  }
}
console.log(MaxArr);

//Reverse Array
let ReverseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(ReverseArray.reverse());

//stars pattern
let num = 5;
let star = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < num - i; j++) {
    star += " ";
  }
  for (let k = 0; k < i; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
