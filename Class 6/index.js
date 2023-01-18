console.log("Hello World");
// alert("Hello Now again")

var divide = (num1, num2) => {
  if (num2 == 0) {
    return console.log("Denominator can't be zero");
  }
  return num1 / num2;
};

var dayOfTheWeek = (dayNum) => {
  switch (dayNum) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      console.log("Please provide valid Day");
      break;
  }

  return day;
};

// console.log(divide(4,0))
let dayNum = new Date().getDay();
console.log(dayNum);
console.log("The Day is: " + dayOfTheWeek(dayNum));

document.getElementById("getDay").innerHTML =
  "Today is " + day + " & the number of Day is: " + dayOfTheWeek(dayNum);
