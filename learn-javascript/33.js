/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы 
со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
*/

// Версия 1.
function filterRange(arr, a, b) {
    let resArr = []; 
    arr.forEach((elem) => {
        if (elem >= a && elem <= b) {
            resArr.push(elem);
        }})
    return resArr;
}

// Версия 2.
function filterRange(arr, a, b) {
    return arr.filter((elem) => (elem >= a && elem <= b))
}
