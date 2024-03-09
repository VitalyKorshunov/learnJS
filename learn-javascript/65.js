/*
Вывод односвязного списка в обратном порядке

Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке(64.js).

Сделайте два решения: с использованием цикла и через рекурсию.
*/

// Рекурсия
function printList(list) {
    if (list.next) {
      printList(list.next); 
    }
    console.log(list.value)
}

// Цикл 
function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
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