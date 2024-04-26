/*
Декоратор-шпион

Создайте декоратор spy(func), который должен возвращать обёртку, которая 
сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например:

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная 
форма – sinon.spy – содержится в библиотеке Sinon.JS.
*/

function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy(func) {
    let calls = new Set();

    return function () {
        //let key = hash(arguments);
        let value = [...arguments]
        calls.add(value);

        func.calls = calls.values();
    }
}

// function hash(args) {
//     return [].join.call(args)
// }

//console.log(hash(1,3,4,5))

work = spy(work);

// console.log(work(1, 3))
// console.log(work(2, 3))
// console.log(work(1, 4))

work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
