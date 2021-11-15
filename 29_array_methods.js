// Базовые методы массивов
let arr = [ 11, 'ew', 22, 'keys' ];
console.log(arr.length);

// Удалить элемент из начала массива и вывести его arr.shift()
console.log(arr.shift());
console.log(arr);

// Добавить элемент в начало arr.unshift()
arr.unshift('arr', 'new', 'elmnts');
console.log(arr);

// Добавить элемент в конец массива arr.push()
arr.push('last element');
console.log(arr);

// Удалить элемент из конца массива arr.pop()
console.log(arr.pop());
console.log(arr);

// Метод, который дает возможность удалить, добавить, либо изменить элемент
// arr.splice(index[, deleteCount, elem1, ... ,elemN])

// Чтобы удалить элемент, достаточно указать позицию начала удаления и количество элементов для удаления
arr.splice(3, 1);
console.log(arr);

// Теперь удалим 2 элемента и добавим вместо них новые
arr.splice(1, 2, '1SpliceElem', '2SpliceElem', '3SpliceElem');
console.log(arr);

//Метод splice возвращает массив из удаленных элементов
let removedElems = arr.splice(0, 2);
console.log(removedElems);
console.log(arr);

// Для просто добавления элеметов в массив, счетчик удаления ставим в 0
arr.splice(arr.length, 0, 'spliceToEnd'); // Добавили новый элемент(строка) в конец массива
console.log(arr);

// В методах массивов можно использовать отрацательные индексы.
// Они ведут отсчет от конца
arr.splice(-1, 0, 'bfrLst');
console.log(arr);

// arr.slice(start, end) копирует значения массива. Если значения не указаны, коппируется весь массив
let subArr = arr.slice(2, 4);
console.log(subArr);
let arrCopy = subArr.slice();
console.log(arrCopy);

//arr.concat(arg1,..., argN);
// используется для создания нового массива путем копирования указанного и добавлением новых аргументов
let concatArr = arrCopy.concat('cnct1', [ 3, 4 ], subArr);
console.log(concatArr);

//Если в аргументе указать, объект, его значения не будет добавлены в массив. Будет добавлен сам объект
let concatObj = arrCopy.concat('cnct', { sl: '23' });
console.log(concatObj);

// Для добавления значений ключей, ключи должны быть числовым, указана длина объекта и специальное свойство [Symbol.isConcatSpreadable]: true
let concatObjRight = arrCopy.concat('cnctObj', { 0: 9, 1: 'hi', [Symbol.isConcatSpreadable]: true, length: 2 }, 9);
console.log(concatObjRight);

// arr.forEach запуск функции для каждого элемента массива
concatObjRight.forEach(function(item, indexq, array) {
	console.log(indexq);
});

// console.log(concatObjRight.includes(22));
// console.log(concatObjRight.indexOf(22));
// console.log(concatObjRight.lastIndexOf(22));

let findResult = concatObjRight.find(function(item) {
	if (item === 'hi') {
		return item;
	}
});
console.log(findResult);

findIndexResult = concatObjRight.findIndex(function(item, index) {
	if (item == 9) {
		return index;
	}
});

console.log(findIndexResult);

let filterResult;

filterResult = concatObjRight.filter(function(item, index) {
	if (item == 9) {
		return item;
	}
});
console.log(filterResult);

let mapResult = concatObjRight.map(function(params) {
	return 2 * params;
});

console.log(mapResult);

let sortResult = concatObjRight.sort();
console.log(sortResult);
function compare(a, b) {
	return a - b;
}

sortResult = concatObjRight.sort(compare);
console.log(sortResult);
