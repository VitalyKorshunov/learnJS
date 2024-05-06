-- Задачи уровня 8kyu
/* 1. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/50654ddff44f800200000004/train/sql
 
 Multiply
 
 This code does not execute properly. Try to figure out why.
 */
-- SOLUTION ✅✅✅✅✅✅
SELECT
  (price * amount) AS total
FROM
  items;

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
SELECT
  number * -1 AS res
FROM
  opposite;

/* 3. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/582365c18917435ab3000020/train/sql
 
 SQL Grasshopper: Select Columns
 
 Greetings Grasshopper!
 Using only SQL, write a query that returns all rows in the custid, custname, and custstate columns from the customers table.
 
 Table Description for customers:
 Column	Data Type	Size	Sample
 custid	integer	8	4
 custname	string	50	Anakin Skywalker
 custstate	string	50	Tatooine
 custard	string	50	R2-D2
 Your solution should contain only SQL.
 */
-- SOLUTION ✅✅✅✅✅✅
SELECT
  custid,
  custname,
  custstate
FROM
  customers;

/* 4. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/5809b9ef88b750ab180001ec/train/sql
 
 1. Find all active students
 
 Create a simple SELECT query to display student information of all ACTIVE students.
 
 TABLE STRUCTURE:
 
 students
 Id (integer)	FirstName (text)	LastName (text)	IsActive (boolean)
 
 Note:
 
 IsActive (true = 1 or false = 0)
 */
-- SOLUTION ✅✅✅✅✅✅
SELECT
  *
FROM
  students
WHERE
  IsActive = 1;