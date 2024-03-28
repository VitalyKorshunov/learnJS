//Задачи уровня 6kyu

// 1. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

// SOLUTION ✅✅✅✅✅✅

function createPhoneNumber(numbers) {
    return '(' + numbers.slice(0, 3).join('') + ')' + ' ' + numbers.slice(3, 6).join('') + '-' + numbers.slice(6, 10).join('');
}



// 2. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript

Transform To Prime

Task :
Given a List [] of n integers , find minimum number to be inserted in a list, 
so that sum of all elements of list should equal the closest prime number .

Notes
List size is at least 2 .
List's numbers will only positives (n > 0) .
Repetition of numbers in the list could occur .
The newer list's sum should equal the closest prime number .

Input >> Output Examples
1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:
Since , the sum of the list's elements equal to (6) , the minimum number to be 
inserted to transform the sum to prime number is (1) , which will make the sum 
of the List equal the closest prime number (7) .
2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:
Since , the sum of the list's elements equal to (32) , the minimum number to be 
inserted to transform the sum to prime number is (5) , which will make the sum 
of the List equal the closest prime number (37) .
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:
Since , the sum of the list's elements equal to (189) , the minimum number to be 
inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .
*/

// SOLUTION ✅✅✅✅✅✅

function minimumNumber(numbers) {
    let sumNumbers = numbers.reduce((sum, n) => sum + n);
    let i = 0;

    while (true) {
        if (isEasyNum(sumNumbers)) return i;
        i++;
        sumNumbers++;
    }
}

function isEasyNum(n) {
    nSqrt = Math.trunc(Math.sqrt(n))

    for (let i = 2; i <= nSqrt; i++) {
        if (n % i == 0) return false
    }

    return true
}



// 3. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124/train/javascript

Definition (Primorial Of a Number)

Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers 
are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

Task
Given a number N , calculate its primorial.!alt!alt
Notes
Only positive numbers will be passed (N > 0) .
Input >> Output Examples:
1- numPrimorial (3) ==> return (30)
Explanation:
Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

Mathematically written as , P3# = 30 .
2- numPrimorial (5) ==> return (2310)
Explanation:
Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .

Mathematically written as , P5# = 2310 .
3- numPrimorial (6) ==> return (30030)
Explanation:
Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .

Mathematically written as , P6# = 30030 .
*/

// SOLUTION ✅✅✅✅✅✅

function numPrimorial(num) {
    let primes = getPrimes(num);
    return primes.reduce((acc, n) => acc * n, 1);
}

function getPrimes(n) {
    let result = [];
    for (let i = 2; result.length < n; i++) {
        if (isPrime(i)) result.push(i)
    }
    return result;
}

function isPrime(n) {
    let sqrt = Math.trunc(Math.sqrt(n));

    if (n < 2) return false;

    for (let i = 2; i <= sqrt; i++) {
        if (!(n % i)) return false;
    }

    return true;
}



// 4. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

Encrypt this!

Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

// SOLUTION ✅✅✅✅✅✅

var encryptThis = function (text) {
    return text.split(' ').map((word) => word[0].charCodeAt(0) + (word.length > 1 ? word.slice(-1) : '') + word.slice(2, -1) + (word.length > 2 ? word.charAt(1) : '')).join(' ');
}

// Best

const encryptThis = text =>
    text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (word, a, mid, b) =>
        word.charCodeAt(0) + b + mid + a);



// 5. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

Counting Duplicates

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic 
characters and numeric digits that occur more than once in the input string. The input 
string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// SOLUTION ✅✅✅✅✅✅
// O(n log n)

function duplicateCount(text) {
    let count = 0;
    let textArr = text.toLowerCase().split('');
    textArr.sort((a, b) => a.localeCompare(b));

    while (textArr.length) {
        let lastLetter = textArr.pop();

        if (textArr.at(-1) === lastLetter) {
            count++;

            while (textArr.at(-1) === lastLetter) {
                textArr.pop();
            }
        }
    }
    return count;
}

// O(n)

function duplicateCount(text) {
    const charCount = {};
    let count = 0;

    // Приведем все символы к нижнему регистру для учета повторов
    text = text.toLowerCase();

    // Пройдем по каждому символу в строке
    for (let char of text) {
        // Если символ уже встречался, увеличим его счетчик
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // Иначе установим счетчик для символа равным 1
            charCount[char] = 1;
        }
    }

    // Посчитаем количество символов, у которых счетчик больше 1
    for (let char in charCount) {
        if (charCount[char] > 1) {
            count++;
        }
    }

    return count;
}


