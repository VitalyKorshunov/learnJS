//Задачи уровня 5kyu

// 1. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// SOLUTION ✅✅✅✅✅✅

function pigIt(str) {
	return str.split(' ')
		.map((word) => word.slice(1) + word.slice(0, 1) + ((word === '?' || word === '!' || word === '.') ? '' : 'ay'))
		.join(' ');
}



// 2. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

Human Readable Time

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a 
human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

// SOLUTION ✅✅✅✅✅✅

function humanReadable(seconds) {
	if (seconds > 359999) return '99:59:59';

	const ss = formatTime(seconds % 60);
	const mm = formatTime(Math.trunc(seconds / 60 % 60));
	const hh = formatTime(Math.trunc(seconds / 3600 % 100));

	return `${hh}:${mm}:${ss}`
}

function formatTime(time) {
	time = time.toString();
	return (time.length === 1) ? '0' + time : time;
}



// 3. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

RGB To Hex Conversion

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a 
hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that 
fall out of that range must be rounded to the closest valid value.
Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

// SOLUTION ✅✅✅✅✅✅

function rgb(r, g, b) {
	return convertToHex(r) + convertToHex(g) + convertToHex(b);
}

function convertToHex(num) {
	let hex = range(num);
	hex = hex.toString(16);
	return (hex.length === 1) ? '0' + hex.toUpperCase() : hex.toUpperCase();
}

function range(num) {
	return ((num < 0) ? '00' :
		(num > 255) ? 'FF' : num);
}



// 4. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

// SOLUTION ✅✅✅✅✅✅

function generateHashtag(str) {
	let result = str.split(' ')
		.filter((elem) => elem.length)
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join('');
	result = (result.length >= 140 || result.length === 0) ? false : '#' + result;
	return result;
}



// 5. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

First non-repeating character

Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that
is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the
string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character, but the function should return
the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("");
† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
*/

// SOLUTION ✅✅✅✅✅✅

function firstNonRepeatingLetter(s) {
	const letters = {};

	for (let letter of s) {
		if (letters[letter.toLowerCase()] === undefined) {
			letters[letter.toLowerCase()] = { count: 1, firstLetter: letter }
		} else {
			letters[letter.toLowerCase()].count += 1;
		}
	};

	for (let letter in letters) {
		if (letters[letter].count === 1) {
			return letters[letter].firstLetter;
		}
	}

	return '';
}



// 6. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// SOLUTION ✅✅✅✅✅✅

function moveZeros(arr) {
	const arrFiltred = arr.filter((num) => num !== 0);

	for (let i = arrFiltred.length; i < arr.length; i++) {
		arrFiltred.push(0);
	}

	return arrFiltred;
}

// Best

function moveZeros(arr) {
	return [
		...(arr.filter(n => n !== 0)),
		...(arr.filter(n => n === 0))
	];
}