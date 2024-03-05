//Задачи уровня 7kyu

// 1. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

Remove the minimum

The museum of incredibly dull things
The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the 
interior architect, comes up with a plan to remove the most boring exhibits. She gives 
them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so 
she asks you to write a program that tells her the ratings of the exhibits after 
removing the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original 
array/list. If there are multiple elements with the same value, remove the one with 
the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

// SOLUTION ✅✅✅✅✅✅

function removeSmallest(numbers) {
	let copyNumbers = numbers.slice(0);
	let sortNumbers = numbers.slice(0);

	sortNumbers.sort((a, b) => a - b)

	if (copyNumbers.includes(sortNumbers[0])) copyNumbers.splice(copyNumbers.indexOf(sortNumbers[0]), 1);
	if (copyNumbers.length == 1) copyNumbers.length = [0]
	
	return copyNumbers;
}


// 2. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript

Convert an array of strings to array of numbers

Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

// SOLUTION ✅✅✅✅✅✅

function toNumberArray(stringarray){
    return stringarray.map(num => +num);
}

// Best

function toNumberArray(stringarray)
{
  return stringarray.map(parseFloat);
}



// 3. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/javascript

Substring fun

Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should 
be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and 
each word will have enough letters.
*/

// SOLUTION ✅✅✅✅✅✅

function nthChar(words){
	return words.reduce((newWord, item, index) => newWord + item[index], '')
}



// 4. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript

Product Array (Array Series #5)

Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is 
equal to The Product of all the elements of Arr[] except Arr[i].

Notes
Array/list size is at least 2 .

Array/list's numbers Will be only Positives

Repetition of numbers in the array/list could occur.

Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 20 is the product of all array's elements except the first element

The second element 12 is the product of all array's elements except the second element .

productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1

The second element 2 is the product of all array's elements except the second element 5

The Third element 5 is the product of all array's elements except the Third element 2.

productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
Explanation:
The first element 180 is the product of all array's elements except the first element 10

The second element 600 is the product of all array's elements except the second element 3

The Third element 360 is the product of all array's elements except the third element 5

The Fourth element 300 is the product of all array's elements except the fourth element 6

Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/

// SOLUTION ✅✅✅✅✅✅

function productArray(numbers)
{
  let sum = numbers.reduce((x, y) => x * y);
  return numbers.map(x => sum / x);
}



// 5. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

Minimize Sum Of Array (Array Series #1)

Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
*/

// SOLUTION ✅✅✅✅✅✅

function minSum(arr) {
	let numsMin = []
	let numsMax = []
	let sum = [];
	arr.sort((a, b) => a - b);
  
	numsMin = arr.slice(0, arr.length / 2)
	numsMax = arr.slice(arr.length / 2, arr.length).reverse()
  
	for (let i = 0; i < numsMin.length; i++) {
		sum.push(numsMax[i] * numsMin[i])
	}
  
	return sum.reduce((acc, elem) => acc + elem, 0)
}

// Best

function minSum(arr) {
	return arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
}