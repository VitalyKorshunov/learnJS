/*
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = sumSalaries(salaries);


function sumSalaries(obj) {
    let result = 0;

    if (isEmpty(obj)) {
        return result;
    }
    
    for (let key in obj) {
        result += obj[key];
    }
    
    return result;
}

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}