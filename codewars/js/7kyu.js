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
    let str = '';
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


// 10. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript

Maximum Triplet Sum (Array Series #7)

Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .
*/

// SOLUTION ✅✅✅✅✅✅

function maxTriSum(numbers) {
    let result = [];

    for (let num of numbers) {
        if (!result.includes(num)) result.push(num);
    }

    result.sort((a, b) => b - a);

    return (result[0] + result[1] + result[2]);

}

// Best

function maxTriSum(numbers) {
    return ([...new Set(numbers)]).sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b);
}

// 11. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

Row Weights

Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two 
integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/

// SOLUTION ✅✅✅✅✅✅

function rowWeights(array) {
    let team1 = 0;
    let team2 = 0;

    array.forEach((n, i) => i % 2 ? team2 += n : team1 += n);

    return [team1, team2]
}


// Alternative 

rowWeights = arr => arr.reduce((a, b, i) => (a[i % 2] += b, a), [0, 0])


// 12. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript

Maximum Gap (Array Series #4)

Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_
Repetition of numbers in the array/list could occur.
The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

Note : Regardless the sign of negativity .

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

Note : Regardless the sign of negativity .

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .

Note : Regardless the sign of negativity .
*/

// SOLUTION ✅✅✅✅✅✅

function maxGap(numbers) {
    let result = numbers.sort((a, b) => a - b).map((n, i) => isNaN(numbers[i + 1]) ? 0 : Math.abs(numbers[i + 1] - n))
    return Math.max(...result)
}


// 13. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript

Minimum Steps (Array Series #6)

Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in 
the array until their Sum becomes greater or equal to K.
Notes:
List size is at least 3.
All numbers will be positive.
Numbers could occur more than once , (Duplications may exist).
Threshold K will always be reachable.
Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .
Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .
minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
Explanation:
We add two smallest elements (4 + 2), their sum is 6 .
Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .
Now we add the next smallest number (14 + 9) , so the sum becomes 23 .
Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .
minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
Explanation:
We add two smallest elements (19 + 17), their sum is 36 .
Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .
We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 
8 Steps .

Expected Time Complexity O(n Log n)
*/

// SOLUTION ✅✅✅✅✅✅

function minimumSteps(numbers, value) {
    let sum = 0;
    numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (sum >= value) return i;
    }
}


// 14. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

Maximum Product

Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/

// SOLUTION ✅✅✅✅✅✅

function adjacentElementsProduct(array) {
    return Math.max(...array.map((n, i, arr) => i > 0 ? n * arr[i - 1] : n * arr[i + 1]))
}

// Best

function adjacentElementsProduct(numbers) {
    let currentMaxProduct = numbers[0] * numbers[1];

    for (let i = 1; i < numbers.length - 1; i++) {
        const productOfNextAdjacents = numbers[i] * numbers[i + 1];

        if (productOfNextAdjacents > currentMaxProduct) {
            currentMaxProduct = productOfNextAdjacents;
        }
    }

    return currentMaxProduct;
}


// 15. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

Form The Minimum

Task
Given a list of digits, return the smallest number that could be formed from these digits, 
using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/

// SOLUTION ✅✅✅✅✅✅

function minValue(values) {
    return +[...new Set(values)].sort().join('');
}

// or 

function minValue(values) {
    return parseInt([...new Set(values)].sort((a, b) => a - b).join(''));
}


// 16. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript

Balanced Number (Special Numbers Series #1 )

A balanced number is a number where the sum of digits to the left of the middle digit(s) and
the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. (For example,
92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the
middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or
not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced"
accordingly. The passed number will always be positive.

Examples
7 ==> return "Balanced"
Explanation:
middle digit(s): 7
sum of all digits to the left of the middle digit(s) -> 0
sum of all digits to the right of the middle digit(s) -> 0
0 and 0 are equal, so it's balanced.
295591 ==> return "Not Balanced"
Explanation:
middle digit(s): 55
sum of all digits to the left of the middle digit(s) -> 11
sum of all digits to the right of the middle digit(s) -> 10
11 and 10 are not equal, so it's not balanced.
959 ==> return "Balanced"
Explanation:
middle digit(s): 5
sum of all digits to the left of the middle digit(s) -> 9
sum of all digits to the right of the middle digit(s) -> 9
9 and 9 are equal, so it's balanced.
27102983 ==> return "Not Balanced"
Explanation:
middle digit(s): 02
sum of all digits to the left of the middle digit(s) -> 10
sum of all digits to the right of the middle digit(s) -> 20
10 and 20 are not equal, so it's not balanced.
*/

// SOLUTION ✅✅✅✅✅✅

function balancedNum(number) {
    number = [...number.toString(10)];

    if (number.length < 3) return 'Balanced';

    if (number.length % 2) {
        let leftNumsSum = number.slice(0, (number.length - 1) / 2).reduce((sum, n) => sum + +n, 0);
        let rightNumsSum = number.slice((number.length + 1) / 2, number.length).reduce((sum, n) => sum + +n, 0);
        return (leftNumsSum == rightNumsSum) ? 'Balanced' : 'Not Balanced';
    } else {
        let leftNumsSum = number.slice(0, (number.length) / 2 - 1).reduce((sum, n) => sum + +n, 0);
        let rightNumsSum = number.slice((number.length) / 2 + 1, number.length).reduce((sum, n) => sum + +n, 0);
        return (leftNumsSum == rightNumsSum) ? 'Balanced' : 'Not Balanced';
    }
}

// Best

function balancedNum(number) {

    let str = `${number}`
        , len = (str.length - (str.length % 2 ? -1 : -2)) / 2
        , sum = digits => [...digits].reduce((a, b) => a + +b, 0);

    return sum(str.slice(0, len)) === sum(str.slice(-len))
        ? 'Balanced'
        : 'Not Balanced';

}

// 17. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript

Strong Number (Special Numbers Series #2)

Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String
Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .
*/

// SOLUTION ✅✅✅✅✅✅

function strong(n) {
    let sumFactorials = [...n.toString()].reduce((sum, n) => sum + factorial(n), 0)

    return (sumFactorials == n) ? 'STRONG!!!!' : 'Not Strong !!';
}

function factorial(n) {
    let sum = 1;

    for (let i = 2; i <= n; i++) {
        sum *= i;
    }

    return sum;
}


// 18. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript

Disarium Number (Special Numbers Series #3)

Definition
Disarium number is the number that The sum of its digits powered with their respective positions 
is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/

// SOLUTION ✅✅✅✅✅✅

function disariumNumber(n) {
    return ([...`${n}`].reduce((sum, n, i) => sum + n ** [i + 1], 0) == n) ?
        'Disarium !!' :
        'Not !!';
}

// 19. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript

Jumping Number (Special Numbers Series #4)

Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .

Notes
Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers.

Input >> Output Examples
jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number
jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(23) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(556847) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(4343456) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(89098) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(32) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
*/

// SOLUTION ✅✅✅✅✅✅

function jumpingNumber(n) {
    n = n.toString()
    if (n.length == 1) return 'Jumping!!';

    for (let i = 0; i < n.length - 1; i++) {
        let diff = n[i + 1] - n[i]

        if (diff > 1 || diff < -1) {
            return 'Not!!';
        }
    }
    return 'Jumping!!';
}


// 20. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a55f04be6be383a50000187/train/javascript

Special Number (Special Numbers Series #5)

Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed will be positive (N > 0) .

All single-digit numbers within the interval [1:5] are considered as special number.

Input >> Output Examples
specialNumber(2) ==> return "Special!!"
Explanation:
It's a single-digit number within the interval [1:5] .

specialNumber(9) ==> return "NOT!!"
Explanation:
Although, it's a single-digit number but Outside the interval [1:5] .

specialNumber(23) ==> return "Special!!"
Explanation:
All the number's digits formed from the interval [0:5] digits .

specialNumber(39) ==> return "NOT!!"
Explanation:
Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ).

specialNumber(59) ==> return "NOT!!"
Explanation:
Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ).

specialNumber(513) ==> return "Special!!"
specialNumber(709) ==> return "NOT!!"
*/

// SOLUTION ✅✅✅✅✅✅

function specialNumber(n) {
    return [...n.toString(10)].every((num) => num <= 5) ? 'Special!!' : 'NOT!!';
}

// Alternative

function specialNumber(n) {
    return /[6-9]/.test(n) ? 'NOT!!' : 'Special!!'
}

// 21. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

Automorphic Number (Special Numbers Series #6)

Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive
Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 
Explanation:
25 squared is 625 , Ends with the same number's digits which are 25 .

autoMorphic (13) -->> return "Not!!"
Explanation:
13 squared is 169 , Not ending with the same number's digits which are 69 .

autoMorphic (76) -->> return "Automorphic"
Explanation:
76 squared is 5776 , Ends with the same number's digits which are 76 .

autoMorphic (225) -->> return "Not!!"
Explanation:
225 squared is 50625 , Not ending with the same number's digits which are 225 .

autoMorphic (625) -->> return "Automorphic"
Explanation:
625 squared is 390625 , Ends with the same number's digits which are 625 .

autoMorphic (1) -->> return "Automorphic"
Explanation:
1 squared is 1 , Ends with the same number's digits which are 1 .

autoMorphic (6) -->> return "Automorphic"
Explanation:
6 squared is 36 , Ends with the same number's digits which are 6
*/

// SOLUTION ✅✅✅✅✅✅

function automorphic(n) {
    let square = (n ** 2).toString(10);
    square = square.slice(square.length - `${n}`.length);
    return square == n ? 'Automorphic' : 'Not!!';
}

// Best

const automorphic = n => `${n ** 2}`.endsWith(n) ? `Automorphic` : `Not!!`;


// 22. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a662a02e626c54e87000123/train/javascript

Extra Perfect Numbers (Special Numbers Series #7)

Definition
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Input >> Output Examples
extraPerfect(3)  ==>  return {1,3}
Explanation:
(1)10 =(1)2
First and last bits as set bits.

(3)10 = (11)2
First and last bits as set bits.

extraPerfect(7)  ==>  return {1,3,5,7}
Explanation:
(5)10 = (101)2
First and last bits as set bits.

(7)10 = (111)2
First and last bits as set bits.
*/

// SOLUTION ✅✅✅✅✅✅

function extraPerfect(n) {
    let numbers = [];

    for (let i = 1; i <= n; i += 2) {
        numbers.push(i);
    }

    return numbers;
}


// 23. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

Tidy Number (Special Numbers Series #9)

Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as a Boolean

Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

tidyNumber (1024) ==> return (false)
Explanation:
The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

tidyNumber (13579) ==> return (true)
Explanation:
The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

tidyNumber (2335) ==> return (true)
Explanation:
The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3
*/

// SOLUTION ✅✅✅✅✅✅

function tidyNumber(n) {
    let newNum = n.toString(10).split('').sort((a, b) => a - b).join('');
    return (newNum == n);
}

// Alternative

function tidyNumber(n) {
    return [...n += ''].sort().join('') == n
}


// 24. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/

// SOLUTION ✅✅✅✅✅✅

function squareDigits(num) {
    return +[...(`${num}`)].reduce((str, n) => str + n ** 2, '');
}


// 25. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return 
the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

// SOLUTION ✅✅✅✅✅✅

function highAndLow(numbers) {
    numbers = numbers.split(' ')
    let min = +numbers[0];
    let max = +numbers[0];

    numbers.forEach((num) => {
        min = (num < min) ? +num : min;
        max = (num > max) ? +num : max;
    });

    return `${max} ${min}`;
}


// 26. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

Descending Order

Your task is to make a function that can take any non-negative integer as an argument and 
return it with its digits in descending order. Essentially, rearrange the digits to create 
the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// SOLUTION ✅✅✅✅✅✅

function descendingOrder(n) {
    return +[...`${n}`].sort((a, b) => b - a).join('');
}


// 27. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. If the word's length is even, return 
the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 
	in some test cases due to an error in the test cases). You do not need to test for this. 
	This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

// SOLUTION ✅✅✅✅✅✅

function getMiddle(s) {
    return (s.length % 2 === 0)
        ? s[s.length / 2 - 1] + s[s.length / 2]
        : s[(s.length - 1) / 2];
}


// 28. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// SOLUTION ✅✅✅✅✅✅

function accum(s) {
    return s.split('').map((letter, i) => letter.toUpperCase() + letter.repeat(i).toLowerCase()).join('-');
}


// 29. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

You're a square!

A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like 
more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! 
Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! 
That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; 
in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

// SOLUTION ✅✅✅✅✅✅

var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n))
}


// 30. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a 
function that determines whether a string that contains only letters is an isogram. Assume the 
empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

// SOLUTION ✅✅✅✅✅✅

function isIsogram(str) {
    str = str.toLowerCase();
    let setStr = new Set(str);
    return str.length === setStr.size;
}


// 31. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// SOLUTION ✅✅✅✅✅✅

function findShort(s) {
    return s.split(' ').reduce((res, word) => res = (res < word.length) ? res : word.length, Infinity)
}


// 32. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

Create a function that returns the sum of the two lowest positive numbers given an array of 
minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// SOLUTION ✅✅✅✅✅✅

function sumTwoSmallestNumbers(numbers) {
    const numbersCopy = numbers;
    numbersCopy.sort((a, b) => a - b);
    return numbersCopy[0] + numbersCopy[1];
}


// 33. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

Beginner Series #3 Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers 
between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

// SOLUTION ✅✅✅✅✅✅

function getSum(a, b) {
    let sum = 0;

    if (a === b) {
        return a;
    } else if (a > b) {
        [a, b] = [b, a];
    }

    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
}

// Best

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}


// 34. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// SOLUTION ✅✅✅✅✅✅

function stray(numbers) {
    const obj = {};

    numbers.forEach((a) => {
        return (obj[a] === undefined) ? obj[a] = 1 : obj[a]++;
    });

    for (let num in obj) {
        if (obj[num] == 1) return +num;
    }
}


// 35. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

Parts of a list

Write a function partlist that gives all the ways to divide a list (an array) of at least two elements 
into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: 
	see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], 
["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 

Note
You can see other examples for each language in "Your test cases"
*/

// SOLUTION ✅✅✅✅✅✅

function partlist(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
    }

    return newArr;
}


// 36. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

Vowel Count


Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// SOLUTION ✅✅✅✅✅✅

function getCount(str) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').filter((letter) => vowelsArr.includes(letter)).length;

}


// 37. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript

Set Reducer

Set Reducer
Intro
These arrays are too long! Let's reduce them!

Description
Write a function that takes in an array of integers from 0-9, and returns a new array:

Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
Example

[0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

Your function should then repeat the process on the resulting array, and on the resulting
array of that, until it returns a single integer:

[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

When your function has reduced the array to a single integer following these rules, it should return that integer.

[2] => 2

Rules and assertions
All test arrays will be 2+ in length
All integers in the test arrays will be positive numbers from 0 - 9
You should return an integer, not an array with 1 element
*/

// SOLUTION ✅✅✅✅✅✅

function setReducer(input) {
    if (input.length == 1) {
        return input[0];
    } else {
        const result = [];
        let repeats = 1;

        for (let i = 1; i <= input.length; i++) {
            if (input[i] === input[i - 1]) {
                repeats++;
            } else {
                result.push(repeats)
                repeats = 1;
            }
        }

        return setReducer(result);
    }
}


// 38. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/57547f9182655569ab0008c4/train/javascript

Recursive Replication

You need to design a recursive function called replicate which will receive arguments times and number.

The function should return an array containing repetitions of the number argument. For instance, 
replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

As tempting as it may seem, do not use loops to solve this problem.
*/

// SOLUTION ✅✅✅✅✅✅

function replicate(times, number) {
    if (times < 1) {
        return [];
    } else {
        return [number].concat(replicate(times - 1, number));
    }
}


// 39. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/569512b7707bc1b88200002f/train/javascript

Recursion #2 - Fibonacci

Do you know recursion?
This is a kata series that you can only solve using recursion.
##2 - Fibonacci number

In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation

f(n) = f(n-1) + f(n-2)

with seed values

f(1) = 1 and f(2) = 1

#Your task

You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.
*/

// SOLUTION ✅✅✅✅✅✅

const fibonacci = n => {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};


// 40. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5594463eaf1701909c0000d4/train/javascript

Sum ALL the arrays!

You are given an array of values.
Sum every number value in the array, and any nested arrays (to any depth).
Ignore all other types of values.
*/

// SOLUTION ✅✅✅✅✅✅

function arraySum(arr) {
    let sum = 0;

    for (elem of arr) {
        if (Array.isArray(elem)) {
            sum += arraySum(elem);
        } else if (typeof elem === 'number') {
            sum += elem;
        }
    }

    return sum;
}


// 41. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

Disemvowel Trolls

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// SOLUTION ✅✅✅✅✅✅

function disemvowel(str) {
    return (str.split(' ')
        .map((word) => word.split('')
            .filter((letter) => !(['a', 'o', 'e', 'i', 'u'].includes(letter.toLowerCase()))).join(''))
        .join(' '));
}


// 42. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to
your most secret question is still correct. However, since someone could look over your shoulder, you don't
want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
		 "64607935616" -->      "#######5616"
							 "1" -->                "1"
								"" -->                 ""

/ "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

*/

// SOLUTION ✅✅✅✅✅✅

function maskify(cc) {
    return (cc.length < 5) ? cc : '#'.repeat(cc.length - 4) + cc.slice(-4);
}

// BEST 

function maskify(cc) {
    return cc.slice(-4).padStart(cc.length, '#')
}


// 43. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/586ec0b8d098206cce001141/train/javascript

Thinkful - List and Loop Drills: Inverse Slicer

You're familiar with list slicing in Python and know, for example, that:

>>> ages = [12, 14, 63, 72, 55, 24]
>>> ages[2:4]
[63, 72]
>>> ages[2:]
[63, 72, 55, 24]
>>> ages[:3]
[12, 14, 63]
Write a function inverse_slice that takes three arguments: a list items, an integer a and an integer b. 
The function should return a new list with the slice specified by items[a:b] excluded.

For example:

>>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
[12, 14, 55, 24]
Input domain:

items will always be a valid sequence.
b will always be greater than a.
a will always be greater than or equal to zero.
a will always be less than the length of items.
b may be greater than the length of items.
*/

// SOLUTION ✅✅✅✅✅✅

function inverseSlice(items, a, b) {
    const itemsCopy = items.slice();
    itemsCopy.splice(a, b - a)
    return itemsCopy;
}


// 44. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// SOLUTION ✅✅✅✅✅✅

function solution(str, ending) {
    return str.endsWith(ending)
}


// 45. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// SOLUTION ✅✅✅✅✅✅

let isAnagram = function (test, original) {
    if (test.length !== original.length) return false;

    test = test.toLowerCase().split('');
    original = original.toLowerCase().split('');

    return original
        .every((letter) => {
            if (test.includes(letter)) {
                test[test.indexOf(letter)] = '';
                return true;
            } else {
                return false;
            }
        });
};

// Best

var isAnagram1 = function (test, original) {
    test = test.toLowerCase().split('').sort().join('');
    original = original.toLowerCase().split('').sort().join('');

    return test === original;
};


// 46. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

Two to One

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing 
distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// SOLUTION ✅✅✅✅✅✅

function longest(s1, s2) {
    const set = new Set((s1 + s2).split(''));
    const result = Array.from(set.values()).sort().join('');

    return result
}


// 47. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

Categorize New Member

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your 
help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet 
club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the 
respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

// SOLUTION ✅✅✅✅✅✅

function openOrSenior(data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        let age = data[i][0];
        let handicap = data[i][1];

        result.push((age >= 55 && handicap > 7) ? 'Senior' : 'Open');
    }

    return result;
}


// 48. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, 
you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

// SOLUTION ✅✅✅✅✅✅

function friend(friends) {
    return friends.filter((name) => name.length == 4);
}


// 49. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// SOLUTION ✅✅✅✅✅✅

function reverseWords(str) {
    return str
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ');
}


// 50. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

Sort array by string length

Write a function that takes an array of strings as an argument and returns a sorted array containing
the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not
have to decide how to order multiple strings of the same length.
*/

// SOLUTION ✅✅✅✅✅✅

function sortByLength(array) {
    return array.slice().sort((a, b) => a.length - b.length);
}


// 51. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript

Breaking chocolate problem

Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of
size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one
break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate
to split). Input will always be a non-negative integer.
*/

// SOLUTION ✅✅✅✅✅✅

function breakChocolate(n, m) {
    return (n > 0 && m > 0) ? n * m - 1 : 0;
}


// 52. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

Printer Errors

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of 
simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm 
meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. 
aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string 
representing a rational whose numerator is the number of errors and the denominator the length of the control string. 
Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

// SOLUTION ✅✅✅✅✅✅

function printerError(s) {
    const errors = s.split('').reduce((n, char) => ('abcdefghijklm'.includes(char)) ? n : ++n, 0);
    return `${errors}/${s.length}`;
}


// 53. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

Binary Addition

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, 
or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

// SOLUTION ✅✅✅✅✅✅

function addBinary(a, b) {
    return (a + b).toString(2);
}


// 54. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// SOLUTION ✅✅✅✅✅✅

var number = function (array) {
    return array.map((e, i) => `${i + 1}: ${e}`);
}


// 55. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

Ones and Zeros

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

// SOLUTION ✅✅✅✅✅✅

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};


// 56. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

Number of People in the Bus

There is a bus moving in the city which takes and drops some people at each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the 
bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though 
it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't 
be negative.
The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/

// SOLUTION ✅✅✅✅✅✅

var number = function (busStops) {
    return busStops.reduce((sum, elem) => sum += elem[0] - elem[1], 0);
}


// 57. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

Don't give me five!

Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

// SOLUTION ✅✅✅✅✅✅

function dontGiveMeFive(start, end) {
    let result = [];

    for (let i = start; i <= end; i++) {
        if (!i.toString(10).includes('5')) result.push(i);
    }

    return result.length;
}


// 58. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/559590633066759614000063/train/javascript

The highest profit wins!

Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

// SOLUTION ✅✅✅✅✅✅

function minMax(arr) {
    arr = arr.slice().sort((a, b) => a - b);

    const min = arr[0];
    const max = arr.at(-1);

    return [min, max];
}