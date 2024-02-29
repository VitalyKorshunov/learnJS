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