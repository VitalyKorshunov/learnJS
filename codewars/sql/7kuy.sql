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

/* 6. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/59440034e94fae05b2000073/train/sql
 
 SQL: Concatenating Columns
 
 Given the table below:
 ** names table schema **
 id
 prefix
 first
 last
 suffix
 
 Your task is to use a select statement to return a single column table containing the full title of the person (concatenate all columns together except id), as follows:
 ** output table schema **
 title
 Don't forget to add spaces.
 */
SELECT
  prefix || ' ' || first || ' ' || last || ' ' || suffix AS title
FROM
  names;

SELECT
  CONCAT_WS(' ', prefix, first, last, suffix) AS title
FROM
  names;

/* 7. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/5a8eb3fb57c562110f0000a1/train/sql
 
 GROCERY STORE: Inventory
 
 You are the owner of the Grocery Store. All your products are in the database, that you have created after CodeWars SQL excercises!:)
 Today you are going to CompanyA warehouse
 You need to check what products are running out of stock, to know which you need buy in a CompanyA warehouse.
 Use SELECT to show id, name, stock from products which are only 2 or less item in the stock and are from CompanyA.
 Order the results by product id
 
 products table schema
 id
 name
 price
 stock
 producent
 results table schema
 id
 name
 stock
 */
SELECT
  id,
  name,
  stock
FROM
  products
WHERE
  stock <= 2
  AND producent = 'CompanyA'
ORDER BY
  id;

/* 8. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/5a8ed96bfd8c066e7f00011a/train/sql
 
 GROCERY STORE: Support Local Products
 
 You are the owner of the Grocery Store. All your products are in the database, that you have created after CodeWars SQL excercises!:)
 You care about local market, and want to check how many products come from United States of America or Canada.
 Please use SELECT statement and IN to filter out other origins.
 In the results show how many products are from United States of America and Canada respectively.
 Order by number of products, descending.
 
 products table schema
 id
 name
 price
 stock
 producer
 country
 results table schema
 products
 country
 */
SELECT
  country,
  COUNT(*) AS products
FROM
  products
WHERE
  country IN('United States of America', 'Canada')
GROUP BY
  country
ORDER BY
  products DESC;

/* 9. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/5a8ec692b17101bfc70001ba/train/sql
 
 GROCERY STORE: Logistic Optimisation
 
 You are the owner of the Grocery Store. All your products are in the database, that you have created after CodeWars SQL excercises!:)
 You have reached a conclusion that you waste to much time because you have to many different warehouse to visit each week.
 You have to find out how many different type of products you buy from each producer. If you take only few items from some of them you will stop going there to save the gasoline:)
 In the results show producer and count_products_types which you buy from him.
 Order the result by count_products_types (DESC) then by producer (ASC) in case there are duplicate amounts,
 
 products table schema
 id
 name
 price
 stock
 producer
 results table schema
 count_products_types
 producer
 */
SELECT
  producer,
  COUNT(*) AS count_products_types
FROM
  products
GROUP BY
  producer
ORDER BY
  count_products_types DESC,
  producer ASC;

/* 10. ❓❓❓❓❓❓
 
 https://www.codewars.com/kata/59401c25c15cbeb58d000028/train/sql
 
 SQL Basics - Trimming the Field
 
 You have access to a table of monsters as follows:
 
 monsters schema
 
 id
 name
 legs
 arms
 characteristics
 The monsters in the provided table have too many characteristics, they really only need one each. Your job is to trim the characteristics down so that each monster only has one. If there is only one already, provide that. If there are multiple, provide only the first one (don't leave any commas in there).
 
 You must return a table with the format as follows:
 
 output schema
 
 id
 name
 characteristic
 Order by id
 */
SELECT
  id,
  name,
  SPLIT_PART(characteristics, ', ', 1) AS characteristic
FROM
  monsters
ORDER BY
  id;