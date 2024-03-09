/*
Вывод односвязного списка

Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
*/

// Вариант 1

function printList(list) {
    for (let [key, value] of Object.entries(list)) {
        if (value == null) {console.log('null'); break};
        if (key == 'next') {console.log('next'); printList(value); break};
        console.log(value);
    }
}


//Вариант 2

function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }

}


// Вариант 3

function printList(list) {

  alert(list.value); // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }

}



let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list)