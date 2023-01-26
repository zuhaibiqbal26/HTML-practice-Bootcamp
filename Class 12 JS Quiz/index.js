// Question 1:
const { log: show } = console;

function convertAgeToDays(age) {
  return age * 365;
}

let age = 23;
let days = convertAgeToDays(age);
show("The age is: "+age+" and the days are: "+days);

// document.getElementById('result').innerHTML =
//   'The age is: ' + age + ', and the days are: ' + days;





// Question 2:
function palindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return word+" is not a palindrome";
    }
  }
  return "The word " +word+" is a palindrome";
}

show(palindrome("civic"));





//Question 3:
function Format(num) {
  return num.toFixed(2);
}

let num = 23.143454215;
let formatted = Format(num)
show("The number is: " +num+ " and the formatted num is: "+formatted);





// SECTION III
// Quetion 4

// SECTION IV
// MATRIX MULTIPLICATION

// function matrixMultiplication(m1, m2) {
//   let fil_m1 = m1.length;
//   let col_m1 = m1[0].length;
//   let fil_m2 = m2.length;
//   let col_m2 = m2[0].length;

//   if (col_m1 != fil_m2) return "Matrices cannot be multiplied";

//   let multiplication = new Array(fil_m1);
//   for (x = 0; x < multiplication.length; x++)
//     multiplication[x] = new Array(col_m2).fill(0);

//   for (x = 0; x < multiplication.length; x++) {
//     for (y = 0; y < multiplication[x].length; y++) {
//       for (z = 0; z < col_m1; z++) {
//         multiplication[x][y] = multiplication[x][y] + m1[x][z] * m2[z][y];
//       }
//     }
//   }

//   return multiplication;
// }

// let m1 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// let m2 = [
//   [7, 8],
//   [9, 10],
//   [11, 12],
// ];

// show(matrixMultiplication(m1, m2));
