const integerList = [8, 21, 19];
console.log("Array of numbers:", integerList);
console.log("Array length:", integerList.length);

const paintColors = ["yellow", "purple", "black"];
paintColors.pop();
console.log("After removing the last element:", paintColors);
console.log("Array length:", paintColors.length);

const animals = ["hamster", "parrot"];
animals.push("turtle");
console.log("Array of strings:", animals);
console.log("Array length:", animals.length);

const numberBuffer = [];
numberBuffer.push(9);
console.log(
  "After adding the first number:",
  numberBuffer,
  "Length:",
  numberBuffer.length,
);
numberBuffer.push(27);
console.log(
  "After adding the second number:",
  numberBuffer,
  "Length:",
  numberBuffer.length,
);

const reverseSource = [6, 7, 9];
console.log("Elements of the array in reverse order:");
for (let i = reverseSource.length - 1; i >= 0; i--) {
  console.log(reverseSource[i]);
}

const sequence = [2, 4, 6, 8, 10];
console.log("Array elements:");
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

const maxCandidates = [4, 18, 39, 2, 11];
let currentMax = maxCandidates[0];
for (let i = 1; i < maxCandidates.length; i++) {
  if (maxCandidates[i] > currentMax) {
    currentMax = maxCandidates[i];
  }
}
console.log("Maximum number:", currentMax);

const minCandidates = [55, 3, 17, -4, 12];
let currentMin = minCandidates[0];
for (let i = 1; i < minCandidates.length; i++) {
  if (minCandidates[i] < currentMin) {
    currentMin = minCandidates[i];
  }
}
console.log("Minimum number:", currentMin);

const mixedParity = [3, 8, 12, 19, 24, 31, 40];
let evenTotal = 0;
for (let i = 0; i < mixedParity.length; i++) {
  if (mixedParity[i] % 2 === 0) {
    evenTotal++;
  }
}
console.log("Count of even numbers:", evenTotal);

const baseValues = [5, 7, 4];
const multiplied = [];
for (let i = 0; i < baseValues.length; i++) {
  multiplied.push(baseValues[i] * 2);
}
console.log("New array:", multiplied);

const mixedValues = [-5, 20, -1, 11, 3, 18, -9];
const positiveOnly = [];
for (let i = 0; i < mixedValues.length; i++) {
  if (mixedValues[i] > 0) {
    positiveOnly.push(mixedValues[i]);
  }
}
console.log("Positive numbers:", positiveOnly);

const summationList = [2, 3, 5, 7, 9];
let totalSum = 0;
for (let i = 0; i < summationList.length; i++) {
  totalSum += summationList[i];
}
console.log("Sum of array elements:", totalSum);
