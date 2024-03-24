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
