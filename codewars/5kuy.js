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