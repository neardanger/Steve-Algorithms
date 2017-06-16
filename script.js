//Two Sum Algorithm

function twoSum(numbers, target) {
    var map = [];
    var result = [];
 
    for (var i = 0; i < numbers.length; i++) {
        if (map[numbers[i]] != null) {
            index = map[numbers[i]];
            result[0] = index+1 ;
            result[1] = i+1;
            break;
        } else {
            map[target - numbers[i]] = i;
        }
    }
 
    return result;
}

console.log(twoSum([1,2,3,4,5,6,7],5));

/////////
//Multilples of 3 and 5

function solution(number){
     var found = [];
  for ( var i = 3; i < number; i++ ) {
    if ( 0 === i % 3 || 0 === i % 5 ) {
      found.push(i);
    }
  }
  return found.reduce(function(a,b){return a + b;});
}



array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...);


//UpperCase and LowerCase algorithm
function stringTransformer(str) {
  //string transformer
  var regExp = /^[A-Z]/
  
  return str.split(' ').reverse().join(' ').split(' ').join(' ').split('').map(function(el){
    if(regExp.test(el) == true){
      return el.toLowerCase()
    } else {
     return el.toUpperCase()
    }
  }).join('') 
}

stringTransformer("string One")


//Reversing a number

function flipNumber(n)
{
  //Code goes here!
  var temp = n.split("");
  var arr = [];
  var len = n.length;
  for( var i = 0; i < len; i++ ){
    
    arr.push( temp.pop() );
    temp = temp.reverse();
  }
     
  return arr.join("");
}




