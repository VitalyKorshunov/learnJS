-- Задачи уровня 7kyu
/* 1. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/5802e32dd8c944e562000020/train/sql
 
 SQL Basics: Simple JOIN
 
 For this challenge you need to create a simple SELECT statement that will return all columns from the products table, and join to the companies table so that you can return the company name.
 
 products table schema
 id
 name
 isbn
 company_id
 price
 companies table schema
 id
 name
 You should return all product fields as well as the company name as "company_name".
 
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
 */
-- SOLUTION ✅✅✅✅✅✅
SELECT
  p.*,
  c.name AS company_name
FROM
  products AS p
  JOIN companies AS c ON p.company_id = c.id;

/* 2. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/58111f4ee10b5301a7000175/train/sql
 
 SQL Basics: Simple GROUP BY
 
 For this challenge you need to create a simple GROUP BY statement, you want to group all the people by their age and count the people who have the same age.
 
 people table schema
 id
 name
 age
 select table schema
 age [group by]
 people_count (people count)
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
 */
-- SOLUTION ✅✅✅✅✅✅
SELECT
  age,
  COUNT(*) AS people_count
FROM
  people
GROUP BY
  age;

/* 3. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/580918e24a85b05ad000010c/train/sql
 
 SQL Basics: Simple JOIN with COUNT
 
 For this challenge you need to create a simple SELECT statement that will return all columns from the people table, and join to the toys table so that you can return the COUNT of the toys
 
 people table schema
 id
 name
 toys table schema
 id
 name
 people_id
 You should return all people fields as well as the toy count as "toy_count".
 
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
 */
SELECT
  people.*,
  COUNT (*) AS toy_count
FROM
  people
  JOIN toys ON people.id = toys.people_id
GROUP BY
  people.id;

/* 4. ❓❓❓❓❓❓
 
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