-- Задачи уровня 8kyu

/* 1. ❓❓❓❓❓❓

https://www.codewars.com/kata/50654ddff44f800200000004/train/sql

Multiply

This code does not execute properly. Try to figure out why.
*/

-- SOLUTION ✅✅✅✅✅✅

SELECT (price * amount) AS total FROM items;



/* 2. ❓❓❓❓❓❓

https://www.codewars.com/kata/50654ddff44f800200000004/train/sql

Opposite number

Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:
1: -1
14: -14
-34: 34
You will be given a table: opposite, with a column: number. Return a table with a column: res.
*/

-- SOLUTION ✅✅✅✅✅✅

SELECT number * -1 AS res FROM opposite;