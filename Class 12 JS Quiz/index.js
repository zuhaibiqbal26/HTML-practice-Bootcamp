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






