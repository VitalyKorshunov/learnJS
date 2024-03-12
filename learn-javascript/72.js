/*
Вывод каждую секунду

Напишите функцию printNumbers(from, to), которая выводит число 
каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

1. Используя setInterval.
2. Используя рекурсивный setTimeout.
*/

function printNumbers(from, to) {
    let timer = setInterval(() => {
        console.log(from);
        if (from == to) {
            clearInterval(timer);
        }
        from++
    }, 1000)
}

printNumbers(1, 5)

function printNumbers2(from, to) {
    setTimeout(function start() {
        console.log(from)
        if (from != to) {
            setTimeout(start, 1000);
        }
        from++
    }, 1000)
}

printNumbers2(1, 5)