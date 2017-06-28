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
  return found.reduce(function (a, b) {
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
    .map(function (el) {
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
  return arrAnswer.reduce(function (a, b) {
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
const array = [
  "Mason",
  "Jason",
  "Mack",
  "Harrison",
  "Blitzen",
  "Jackson",
  "Nat",
  "Jay"
];

function randomizer(arr) {
  var newArr = [];

  var randomizer = Math.floor(Math.random() * arr.length);

  return arr[randomizer];
}
randomizer(array);

// switch statement
function countArara(n) {
  var output = "";
  switch (n) {
    case 0:
      return "";
    case 1:
      return "anane";
    case 2:
      return "adak";
    default:
      return "adak " + countArara(n - 2);
  }
}

//find roman numerals!
function romanNumerals(num) {
  var placeHolder = "";
  var romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  var vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var placeHolder = ''
  if (num <= 0) {
    return false
  } else {


    for (var i = 0; i < vals.length; i++) {
      while (vals[i] <= num) {
        placeHolder += romanNumerals[i]
        num -= vals[i]
      }
    }
  }
  return placeHolder
}

romanNumerals(10);

//Inefficient Fibonacci
//O(2^N)
function fib(num) {
  if (num === 0) {
    return 0
  } else if (num <= 1) {
    return 1
  } else {
    return fib(num - 1) + fib(num - 2)
  }
}
fib(4)

//memoized

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
fibonacci(3,3)


//searching in collection 
function whatIsInAName(collection, source) {
  sourceKey = Object.keys(source)
  
    return collection.filter(function(el){
      return sourceKey.every(function(answer){
        return el.hasOwnProperty(answer) && el[answer] === source[answer]
      });
  });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


fib(4);

var register = {
  total: 0,

  add: function(itemCost) {
    this.total += itemCost;
    this.currentAmount = itemCost;
  },
  scan: function(itemName, itemQuantity) {
    switch (itemName) {
      case "eggs":
        this.add(2.0 * itemQuantity);
        break;
      case "chocolate":
        this.add(5.0 * itemQuantity);
    }
    return true;
  },
  voidItem: function() {
    this.total = this.total - this.currentAmount;
  }
};
register.scan("eggs", 1);

function FirstFactorial(num) {
  var result = 1;
  for (var i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}
FirstFactorial(4);
// keep this function call here
FirstFactorial(readline());

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(el) {
    return string.indexOf(el) !== -1;
  });
}
isPangram("testing");

// function whatIsInAName(collection, source) {
//   // What's in a name?
//   var arr = [];
//   var keys = Object.keys(source);

//   console.log(keys);

//   for (var i = 0; i < collection.length; i++) {}
//   // Only change code below this line

//   // Only change code above this line
// }


function whatIsInAName(collection,source){
  var sourceKey = Object.keys(source);
  return collection.filter(function(el){
    return sourceKey.every(function(answer){
      return el.hasOwnProperty(answer) && el[answer] === source[answer]
    })
  })

}
whatIsInAName([{first:"Romeo",last:"Montague"},{first:"Mercutio",last:null},{first:"Tybalt",last:"Capulet"}], {first:"Tybalt"})
