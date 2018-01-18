//task1  Counting Duplicates 
// https://www.codewars.com/kata/counting-duplicates/train/javascript
/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase)
and numeric digits.
*/

function duplicateCount(text){
    var arr    = text.toLowerCase().split("");
    var len    = arr.length;
    var count  = 0;
    var temp   = 0;
    var firstVal  = arr[0];
    while(arr.length > 1) {
        for (var i = 1; i < len; i++) {
            if (firstVal == arr[i]) {
                temp++;
            }
        }

        if (temp > 0) {
            count++;
            for (var i = len-1; i > 0; i--) {
                if (firstVal == arr[i]) {
                    arr.splice(i,1);
                }
            }
            arr.splice(0,1);
            len = arr.length;//初始化长度;
            firstVal = arr[0];//初始化第一个值;
            temp = 0;//初始化计数;

        } else {
            arr.shift();
            len = arr.length;//初始化长度;
            firstVal = arr[0];//初始化第一个值;
            temp = 0;//初始化计数;
        }
    }
    return count;
}
// task2 https://www.codewars.com/kata/find-the-odd-int/train/javascript
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
function findOdd(A) {
    var count = 1;
    A.sort(function(a,b){return a-b;});
    for (var i = 0; i < A.length; i++) {
        if (A[i] == A[i+1]) {
            count++;
        } else {
            if (count%2 == 1) {
//           console.log(A[i]);
                break;
            } else {
                count = 1;
            }
        }
    }
    return A[i];
}

//task3  Highest and Lowest 
//https://www.codewars.com/kata/highest-and-lowest/train/javascript
/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/
// my methods
function highAndLow(numbers){
   var arr = numbers.split(" "); //返回的数组中的值都是字符串;
   arr.sort(function (a,b) {return a - b;});
   return `${arr[arr.length-1]} ${arr[0]}`;
}

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return Math.max.apply(null,numbers) + ' ' + Math.min.apply(null,numbers);//from MDN
}

// other methods
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}


//task4 Reversed Words
//https://www.codewars.com/kata/reversed-words/train/javascript
//Complete the solution so that it reverses all of the words within the string passed in.

//my
function reverseWords(str){
   var arr = str.split(' ');
    var temp;
    var len = arr.length;
    for (let j = 0; j < arr.length; j++) {
      for (let j = 0; j < len-1; j++) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
      len--;
    }
    arr = arr.join(' ');
    return arr;
}

// others
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

function reverseWords(str){
  return str.trim().split(' ').reverse().join(' '); // reverse those words
}

// task5 Categorize New Member
//https://www.codewars.com/kata/categorize-new-member/train/javascript
/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
*/

// my
function openOrSenior(data){
  var result = [];
  data.forEach(function(item){
    if (item[0] >= 55 && item[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  });
  return result;
}

// others
function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


