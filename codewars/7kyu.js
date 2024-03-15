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

function toNumberArray(stringarray) {
	return stringarray.map(num => +num);
}

// Best

function toNumberArray(stringarray) {
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

function nthChar(words) {
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

function productArray(numbers) {
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



// 6. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript

Product Of Maximums Of Array (Array Series #2)

Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
Explanation:
Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
maxProduct ({10, 3, -1, -27} , 3)  return (-30)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .
*/

// SOLUTION ✅✅✅✅✅✅

function maxProduct(numbers, size) {
	return numbers.sort((a, b) => b - a).slice(0, size).reduce((acc, num) => acc * num);
}



// 7. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

Array Leaders (Array Series #3)


Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side

2 is greater than the sum all the elements to its right side

Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side

-1 is greater than the sum all the elements to its right side

3 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).
*/

// SOLUTION ✅✅✅✅✅✅

function arrayLeaders(numbers) {
	let map = [];

	numbers.forEach((elem, index) => {
		let tmp = numbers.slice(index + 1)
		tmp = tmp.reduce((sum, item) => sum + item, 0);

		if (elem > tmp) {
			map.push(elem);
		}
	})

	return map;
}


// Best
let arrayLeaders = numbers => {
	return numbers.filter((a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)
}



// 8. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/6512b3775bf8500baea77663/javascript

From A to Z

Given a string indicating a range of letters, return a string which includes all the 
letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!

Examples
"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"
Notes
A hyphen will separate the two letters in the string.
You don't need to worry about error handling in this kata (i.e. both letters will be 
the same case and the second letter will not be before the first alphabetically).
*/

// SOLUTION ✅✅✅✅✅✅

function gimmeTheLetters(sp) {
	let str = "";
	for (let i = sp.charCodeAt(0); i <= sp.charCodeAt(2); i++) {
		str += (String.fromCharCode(i))
	}
	return str
}



// 9. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/65c0161a2380ae78052e5731/train/javascript

Stone Pickaxe Crafting

Note: Based off Minecraft, hopefully you at least know the game!
Story: You want to create a giant mine shaft, but you're a little stingy with 
your iron and diamonds and would not mine out all of the stone with iron or 
diamond pickaxes. Instead, you rely on less durable but cheaper stone pickaxes! 
You will need a lot of stone pickaxes though as they break faster than diamond 
or iron ones, so you need to find out how many stone pickaxes you can craft before 
you run out of sticks and cobblestones. Unfortunately, you're not an organized 
person, and you leave all of your materials in a single chest with random junk 
that you need to filter.
Task: Given an array, return the maximum amount of stone pickaxes you can craft 
before you run out of sticks and cobblestones. Within the array would be a series 
of strings with the exact names of the materials listed below. A single stone 
pickaxe is made of 3 "Cobblestone" and 2 "Sticks", check if your given array 
contains enough "Sticks" and "Cobblestone" to craft a single stone pickaxe or 
even more. Do not count any materials apart from "Cobblestones", "Sticks" and 
"Wood". Wood can be converted into 4 sticks!

Here are the materials you would expect in an array:

Sticks
Cobblestone
Stone (These are different from cobblestone and cannot be used to make a stone pickaxe.)
Wool
Dirt
Wood (Can be treated as sticks, typically 4 sticks for 1 wood)
Diamond
Array sizes are randomized and range from 1 - 200 with randomized contents.

Examples:

Array: ["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"]
Returned: 1

Array: ["Wood", "Cobblestone", "Cobblestone", "Cobblestone"]
Returned: 1

Array: []
Returned: 0

Array: ["Sticks", "Wool", "Cobblestone"]
Returned: 0

Array: ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"]
Returned: 2
Good Luck :D

Made by miggycoder, this is my first kata I ever created.
*/

// SOLUTION ✅✅✅✅✅✅

function stonePick(arr) {
	let cobblestone = 0;
	let sticks = 0;

	arr.forEach((item) => {
		(item == 'Sticks') ? sticks += 1 :
			(item == 'Wood') ? sticks += 4 :
				(item == 'Cobblestone') ? cobblestone += 1 :
					null;
	});

	let pickaxes = Math.trunc(Math.min((sticks / 2), (cobblestone / 3)));

	return pickaxes;
}