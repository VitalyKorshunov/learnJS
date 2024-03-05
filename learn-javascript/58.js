/*
Форматирование относительной даты

Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: 
"день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

/// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/

function formatDate(date) {
    let currentDate = Date.now();
    let differenceDate = (currentDate - date) / 1000;
    let message;
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    year = year.toString().slice(-2);
    month = (month < 10) ? '0' + month : month;
    day = (day < 10) ? '0' + day : day;
    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    if (differenceDate < 1) message = 'прямо сейчас';
    else if (differenceDate < 60) message = `${differenceDate} сек. назад`;
    else if (differenceDate < 3600) message = `${differenceDate / 60} мин. назад`;
    else {message = `${day}.${month}.${year} ${hour}:${minutes}`};
    
    return message;
}


 console.log(formatDate(new Date(new Date - 1))) ; // "прямо сейчас"

 console.log(formatDate(new Date(new Date - 30 * 1000))) ; // "30 сек. назад"

 console.log(formatDate(new Date(new Date - 5 * 60 * 1000))) ; // "5 мин. назад"

 /// вчерашняя дата вроде 31.12.2016, 20:00
 console.log(formatDate(new Date(new Date - 86400 * 1000))) ;