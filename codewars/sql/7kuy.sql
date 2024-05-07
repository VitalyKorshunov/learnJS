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
 
 https://www.codewars.com/kata/591127cbe8b9fb05bd00004b/train/sql
 
 Best-Selling Books (SQL for Beginners #5)
 
 You work at a book store. It's the end of the month, and you need to find out the 5 bestselling books at your store. 
 Use a select statement to list names, authors, and number of copies sold of the 5 books which were sold most.
 
 books table schema
 
 name
 author
 copies_sold
 NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.
 */
SELECT
  name,
  author,
  copies_sold
FROM
  books
ORDER BY
  copies_sold DESC
LIMIT
  5;

/* 5. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/5e5f09dc0a17be0023920f6f/train/sql
 
 Countries Capitals for Trivia Night (SQL for Beginners #6)
 
 Your friends told you that if you keep coding on your computer, you are going to hurt your eyes. They suggested that 
 you go with them to trivia night at the local club.
 Once you arrive at the club, you realize the true motive behind your friends' invitation. They know that you are a 
 computer nerd, and they want you to query the countries table and get the answers to the trivia questions.
 
 Schema of the countries table:
 
 country (String)
 capital (String)
 continent (String)
 The first question: from the African countries that start with the character E, get the names of their capitals ordered 
 alphabetically.
 
 You should only give the names of the capitals. Any additional information is just noise
 If you get more than 3, you will be kicked out, for being too smart
 Also, this database is crowd-sourced, so sometimes Africa is written Africa and in other times Afrika.
 */
SELECT
  capital
FROM
  countries
WHERE
  continent IN ('Africa', 'Afrika')
  AND country LIKE 'E%'
ORDER BY
  capital
LIMIT
  3;