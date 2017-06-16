//Two Sum Algorithm

function twoSum(numbers, target) {
  var map = [];
  var result = [];

  for (var i = 0; i < numbers.length; i++) {
    if (map[numbers[i]] != null) {
      index = map[numbers[i]];
      result[0] = index + 1;
      result[1] = i + 1;
      break;
    } else {
      map[target - numbers[i]] = i;
    }
  }

  return result;
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 5));

//Multilples of 3 and 5

function solution(number) {
  var found = [];
  for (var i = 3; i < number; i++) {
    if (0 === i % 3 || 0 === i % 5) {
      found.push(i);
    }
  }
  return found.reduce(function(a, b) {
    return a + b;
  });
}

//UpperCase and LowerCase algorithm
function stringTransformer(str) {
  var regExp = /^[A-Z]/;

  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split(" ")
    .join(" ")
    .split("")
    .map(function(el) {
      if (regExp.test(el) == true) {
        return el.toLowerCase();
      } else {
        return el.toUpperCase();
      }
    })
    .join("");
}

stringTransformer("string One");

function flipNumber(n) {
  //Code goes here!
  var temp = n.split("");
  var arr = [];
  var len = n.length;
  for (var i = 0; i < len; i++) {
    arr.push(temp.pop());
    temp = temp.reverse();
  }

  return arr.join("");
}

//Sum numbers in a range

function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var arrAnswer = [];
  for (var i = min; i <= max; i++) {
    arrAnswer.push(i);
  }
  return arrAnswer.reduce(function(a, b) {
    return a + b;
  });
}

sumAll([1, 4]);

//See if there are any different numbers in an array
//.includes
//if an index = -1 that means its not in the other array

function diffArray(arr1, arr2) {
  var newArr = [];
  function firstArray(first, second) {
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  firstArray(arr1, arr2);
  firstArray(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Take a random name from an array
const array = ["Mason", "Jason", "Mack", "Harrison", "Blitzen","Jackson","Nat","Jay"];

function randomizer(arr) {
  var newArr = [];

  var randomizer = Math.floor(Math.random() * (arr.length));

  return arr[randomizer]
}
randomizer(array);


