const numbers = [4, 5, 8, 6, 2, 6];

// forEach

let output = [];
let output1 = [];
numbers.forEach((item) => {
  if (item % 2 == 0) {
    output.push(item);
  } else {
    output1.push(item);
  }
});
console.log("Even using foreach=>", output);
console.log("odd using foreach=>", output1);

// using for loop

for (let i = 0; i > numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    output.push(numbers[i]);
  } else {
    output1.push(numbers[i]);
  }
}

console.log("Even using for=>", output);
console.log("odd using for=>", output1);
