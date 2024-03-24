//Задачи уровня 8kyu

// 1. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript

Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the 
most creative "hello world" you can think of? What is a "hello world" solution 
you would want to show your friends?
*/

// SOLUTION ✅✅✅✅✅✅

function greet() {
  return 'hello world!';
}




// 2. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript

Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
/// Logs 'True' to the console.
*/


// SOLUTION ✅✅✅✅✅✅

function _if(bool, func1, func2) {
  (bool) ? func1() : func2();
}




// 3. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/


// SOLUTION ✅✅✅✅✅✅

function countSheeps(sheep) {
  let qty = 0;
  sheep.forEach((element) => {
    (element === true) ? qty++ : qty;
  })
  return qty
}

/*
Лучший вариант:

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

*/




// 4. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript

The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!
*/


// SOLUTION ✅✅✅✅✅✅

function formatMoney(amount) {

  return `$${amount.toFixed(2)}`
}



// 5. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5b68c7029756802aa2000176/train/javascript

Given a logarithm base X and two values A and B, return a sum of logratihms with the base
*/

// SOLUTION ✅✅✅✅✅✅

function logs(x, a, b) {
  return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x)
}



// 6. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

You're at the zoo... all the meerkats look weird. Something has gone terribly 
wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will 
have three values (tail, body, head). It is your job to re-arrange the array so 
that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have 
to change the element positions with the same exact logics

Simples!

 assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
    assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
    assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
    assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
    assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
*/

// SOLUTION ✅✅✅✅✅✅

function fixTheMeerkat(arr) {
  return arr.reverse()
}



// 7. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

// SOLUTION ✅✅✅✅✅✅

function invert(array) {
  return array.map(num => num * -1);
}



// 8. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

NOT EASY

I love you, a little , a lot, passionately ... not at all

Who remembers back to their time in the schoolyard, when girls would take a flower and 
tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
*/

// SOLUTION ✅✅✅✅✅✅

function howMuchILoveYou(nbPetals) {
  let phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

  while (nbPetals > phrases.length) {
    nbPetals -= phrases.length;
  }

  nbPetals = (nbPetals > 0) ? nbPetals -= 1 : nbPetals;
  return phrases[nbPetals];
}

// BEST

const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
]

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length]
}



// 9. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

Sum Arrays

Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any numbers 
then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just 
learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/

// SOLUTION ✅✅✅✅✅✅

function sum(numbers) {
  "use strict";
  return numbers.reduce((sum, num) => (sum + num), 0);
};



// 10. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript

Pillars
There are pillars near the road. The distance between the pillars is the same and the width 
of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters 
(without the width of the first and last pillar).
*/

// SOLUTION ✅✅✅✅✅✅

function pillars(numPill, dist, width) {
  return (numPill > 1) ? (numPill - 1) * (dist * 100 + width) - width : 0;
}



// 11. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

Multiply the number

Jack really likes his number five: the trick here is that you have to multiply each 
number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
*/

// SOLUTION ✅✅✅✅✅✅

function multiply(number) {
  return number * 5 ** Math.abs(number).toString().length;
}



// 12. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

What is between?

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

// SOLUTION ✅✅✅✅✅✅

function between(a, b) {
  let arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}



// 13. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

Reversed Words

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

// SOLUTION ✅✅✅✅✅✅

function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}



// 14. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

Find numbers which are divisible by given number

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6] 
*/

// SOLUTION ✅✅✅✅✅✅

function divisibleBy(numbers, divisor) {
  return numbers.filter((elem) => elem % divisor == 0);
}



// 15. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

Stringy Strings

write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.
*/

// SOLUTION ✅✅✅✅✅✅

function stringy(size) {
  let str = '';
  for (let i = 1; i <= size; i++) {
    str += i % 2;
  }
  return str
}



// 16. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript

Convert to Binary

Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  / should return 1 /
to_binary(5)  / should return 101 /
to_binary(11) / should return 1011 /
Example:

toBinary(1)  / should return 1 /
toBinary(5)  / should return 101 /
toBinary(11) / should return 1011 /
*/

// SOLUTION ✅✅✅✅✅✅

function toBinary(n) {
  return +n.toString(2);
}



// 17. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

// SOLUTION ✅✅✅✅✅✅

function squareOrSquareRoot(array) {
  return array.map((n) => {
    let sqrtN = Math.sqrt(n);
    return sqrtN === Math.trunc(sqrtN) ? sqrtN : n ** 2;
  });
}



// 18. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/javascript

Get Nth Even Number

Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.
*/

// SOLUTION ✅✅✅✅✅✅

function nthEven(n) {
  return n * 2 - 2;
}



// 19. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first 
and last characters of a string. You're given one parameter, the original string. You 
don't have to worry about strings with less than two characters.
*/

// SOLUTION ✅✅✅✅✅✅

function removeChar(str) {
  return str.slice(1, -1)
};



// 20. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

// SOLUTION ✅✅✅✅✅✅

function squareSum(numbers) {
  return numbers.reduce((sum, n) => sum += n ** 2, 0);
}



// 21. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

String repeat

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// SOLUTION ✅✅✅✅✅✅

function repeatStr(n, s) {
  return s.repeat(n);
}



// 22. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript 

Grasshopper - Summation

Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

// SOLUTION ✅✅✅✅✅✅

var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// Best

function summation(num) {
  return num * (num + 1) / 2;
}



// 23. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript

Miles per gallon to kilometers per liter

Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata:

1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres
*/

// SOLUTION ✅✅✅✅✅✅

function converter(mpg) {
  const IMPERIAL_GALLON_TO_LITRES = 4.54609188;
  const MILE_TO_KILOMETRES = 1.609344;

  return +(mpg * MILE_TO_KILOMETRES / IMPERIAL_GALLON_TO_LITRES).toFixed(2);
}