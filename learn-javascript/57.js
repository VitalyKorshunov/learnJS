/*
Сколько секунд осталось до завтра?

Создайте функцию getSecondsToTomorrow(), возвращающую количество 
секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно 
быть конкретного значения сегодняшней даты.
*/

function getSecondsToTomorrow() {
    let date = new Date();
    date.setDate(date.getDate() + 1)
    date.setHours(0, 0, 0, 0);
    date = (date - Date.now()) / 1000;
    return Math.round(date);
}


// ИЛИ

function getSecondsToTomorrow() {
    let now = new Date();
  
    // завтрашняя дата
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000); // преобразуем в секунды
}