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

/* 5. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/58111670e10b53be31000108/train/sql
 
 SQL Basics: Simple DISTINCT
 
 For this challenge you need to create a simple DISTINCT statement, you want to find all the unique ages.
 
 people table schema
 id
 name
 age
 select table schema
 age (distinct)
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
 */
-- SOLUTION ✅✅✅✅✅✅
SELECT
  DISTINCT(age)
FROM
  people;

/* 6. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/58110da0009b4f7ef80000ad/train/sql
 
 SQL Basics: Simple SUM
 
 For this challenge you need to create a simple SUM statement that will sum all the ages.
 
 people table schema
 id
 name
 age
 select table schema
 age_sum (sum of ages)
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
 
 NOTE2: You need to use ALIAS for creating age_sum
 */
-- SOLUTION ✅✅✅✅✅✅
SELECT
  SUM(age) AS age_sum
FROM
  people;

/* 7. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/581113dce10b531b1d0000bd/train/sql
 
 SQL Basics: Simple MIN / MAX
 
 For this challenge you need to create a simple MIN / MAX statement that will return the Minimum and Maximum 
 ages out of all the people.
 
 people table schema
 id
 name
 age
 select table schema
 age_min (minimum of ages)
 age_max (maximum of ages)
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
 */
-- SOLUTION ✅✅✅✅✅✅
SELECT
  MIN(age) AS age_min,
  MAX(age) AS age_max
FROM
  people;

/* 8. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/5809508cc47d327c12000084/train/sql
 
 SQL Basics: Simple WHERE and ORDER BY
 
 For this challenge you need to create a simple SELECT statement that will return all columns from the people 
 table WHERE their age is over 50
 
 people table schema
 id
 name
 age
 You should return all people fields where their age is over 50 and order by the age descending
 
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
 */
-- SOLUTION ✅✅✅✅✅✅
SELECT
  *
FROM
  people
WHERE
  age > 50
ORDER BY
  age DESC;

/* 9. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/590a95eede09f87472000213/train/sql
 
 Adults only (SQL for Beginners #1)
 
 In your application, there is a section for adults only. You need to get a list of names and ages of users from the users table, who are 18 years old or older.
 
 users table schema
 
 name
 age
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.
 */
SELECT
  name,
  age
FROM
  users
WHERE
  age >= 18;

/* 10. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/590ba881fe13cfdcc20001b4/train/sql
 
 On the Canadian Border (SQL for Beginners #2)
 
 You are a border guard sitting on the Canadian border. You were given a list of travelers who have arrived at your gate today. You know that American, Mexican, and Canadian citizens don't need visas, so they can just continue their trips. You don't need to check their passports for visas! You only need to check the passports of citizens of all other countries!
 
 Select names, and countries of origin of all the travelers, excluding anyone from Canada, Mexico, or The US.
 
 travelers table schema
 
 name
 country
 NOTE: The United States is written as 'USA' in the table.
 
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.
 */
SELECT
  *
FROM
  travelers
WHERE
  country NOT IN ('Canada', 'Mexico', 'USA');

/* 11. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/590cc86f7557c0494000007e/train/sql
 
 Register for the Party (SQL for Beginners #3)
 
 You received an invitation to an amazing party. Now you need to write an insert statement to add yourself 
 to the table of participants.
 
 participants table schema
 
 name (string)
 age (integer)
 attending (boolean)
 NOTES:
 
 Since alcohol will be served, you can only attend if you are 21 or older
 You can't attend if the attending column returns anything but true
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.
 */
INSERT INTO
  participants(name, age, attending)
VALUES
  ('Vitaly', 29, true);

SELECT
  *
FROM
  participants;

/* 12. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/5910b0d378cc2ba91400000b/train/sql 
 
 Collect Tuition (SQL for Beginners #4)
 
 You are working for a local school, and you are responsible for collecting tuition from students. 
 You have a list of all students, some of them have already paid tution and some haven't. Write a select 
 statement to get a list of all students who haven't paid their tuition yet. The list should include all 
 the data available about these students.
 
 students table schema
 
 name (string)
 age (integer)
 semester (integer)
 mentor (string)
 tuition_received (Boolean)
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.
 */
SELECT
  *
FROM
  students
WHERE
  tuition_received = false;

/* 13. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/593ed37c93350098d600001d/train/sql
 
 Easy SQL - Ordering
 
 Your task is to sort the information in the provided table 'companies' by number of employees (high to low). Returned table should 
 be in the same format as provided:
 
 companies table schema
 
 id
 ceo
 motto
 employees
 Solution should use pure SQL. Ruby is only used in test cases.
 */
SELECT
  *
FROM
  companies
ORDER BY
  employees DESC;

/* 14. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/594a6133704e4daf5d00003d/train/sql
 
 Easy SQL: Rounding Decimals
 
 Given the following table 'decimals':
 
 ** decimals table schema **
 
 id
 number1
 number2
 Return a table with two columns (number1, number2), the value in number1 should be rounded down and the value in number2 should be rounded up.
 */
SELECT
  FLOOR(number1) AS number1,
  CEILING(number2) AS number2
FROM
  decimals;

/* 15. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/594a9592704e4d21bc000131/train/sql
 
 SQL Basics: Mod
 
 Given the following table 'decimals':
 
 ** decimals table schema **
 
 id
 number1
 number2
 Return a table with one column (mod) which is the output of number1 modulus number2.
 */
SELECT
  MOD(number1, number2)
FROM
  decimals;

/* 16. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/582cb0224e56e068d800003c/train/sql
 
 Keep Hydrated!
 
 Nathan loves cycling.
 Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
 You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
 
 For example:
 
 hours = 3 ----> liters = 1
 hours = 6.7---> liters = 3
 hours = 11.8--> liters = 5
 
 Input data is available from the table cycling, which has 2 columns: id and hours. For each row, you have to return 3 columns: 
 id, hours and liters (not litres, it's a difference from the kata description)
 */
SELECT
  id,
  hours,
  FLOOR(hours * 0.5) AS liters
FROM
  cycling;