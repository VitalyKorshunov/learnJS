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