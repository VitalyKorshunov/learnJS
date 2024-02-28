//Задачи уровня 8kyu

// 1. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript

Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the 
most creative "hello world" you can think of? What is a "hello world" solution 
you would want to show your friends?
*/

// SOLUTION ✅✅✅✅✅✅

function greet() {
    return 'hello world!';
}




// 2. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript

Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
/// Logs 'True' to the console.
*/


// SOLUTION ✅✅✅✅✅✅

function _if(bool, func1, func2) {
    (bool) ? func1() : func2();
}




// 3. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/


// SOLUTION ✅✅✅✅✅✅

function countSheeps(sheep) {
    let qty = 0;
    sheep.forEach((element) => {
      (element === true) ? qty++ : qty;
    })
    return qty
}

/*
Лучший вариант:

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

*/




// 4. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript

The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!
*/


// SOLUTION ✅✅✅✅✅✅

function formatMoney(amount){
  
  return `$${amount.toFixed(2)}`
}



// 5. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/5b68c7029756802aa2000176/train/javascript

Given a logarithm base X and two values A and B, return a sum of logratihms with the base
*/

// SOLUTION ✅✅✅✅✅✅

function logs(x , a, b) {
  return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x)
}



// 6. ❓❓❓❓❓❓
/*
https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

You're at the zoo... all the meerkats look weird. Something has gone terribly 
wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will 
have three values (tail, body, head). It is your job to re-arrange the array so 
that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have 
to change the element positions with the same exact logics

Simples!

 assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
    assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
    assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
    assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
    assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
*/

// SOLUTION ✅✅✅✅✅✅

function fixTheMeerkat(arr) {
  return arr.reverse()
}




