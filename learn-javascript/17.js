/*
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
   ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

const calculator = {
    read() {
        this.a = +prompt('Введите значение числа a: ', 0);
        this.b = +prompt('Введите значение числа b: ', 0);
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );