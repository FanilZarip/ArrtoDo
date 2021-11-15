// Согласитесь, после чтения статьи, вам стало очевидно что для задачи с TODO вам нужен именно массив, а никак не объект?
// При чем, еще интереснее будет иметь массив объектов, например такой:

const list = [];

let idN = 1;

function addTask(name, status, priority, id = idN) {
	list.push({ id, name, status, priority });
	idN++;
}

function changeStatus(name, status) {
	function change(item, index, array) {
		if (item.name == name) {
			item.status = status;
		}
	}
	list.map(change);
}

function deleteTask(name) {
	function deleteT(item, index, array) {
		if (item.name == name) {
			list.splice(index, 1);
		}
	}
	list.map(deleteT);
}

function showList() {
	let emptyTaskList = '-';
	let toDOTitle = 'TODO:';
	let ProgressTitle = 'InProgress:';
	let DoneTitle = 'Done:';
	let TODO = 'TODO';
	let PROGRESS = 'InProgress';
	let DONE = 'Done';

	function showListByStatus(status, title) {
		let fullTaskInfo;
		let count = 0;
		function getList(item, index, array) {
			if (item.status == status) {
				count = count + 1;
				return console.log(item.name);

				// return item.name; // Так можно увидеть задачу как объект
			}
		}
		console.log('\n', title);

		//
		// Так можно увидеть задачу как объект
		// fullTaskInfo = list.filter(getList);
		// console.log(fullTaskInfo);
		//

		list.filter(getList);

		// console.log(count); // Тестировал счетчик
		if (count === 0) {
			console.log(emptyTaskList);
		}
	}

	showListByStatus(TODO, toDOTitle);
	showListByStatus(PROGRESS, ProgressTitle);
	showListByStatus(DONE, DoneTitle);
}

addTask('test', 'TODO', 'high');
addTask('learnJS', 'InProgress', 'high');
addTask('Arr', 'InProgress', 'critical');
addTask('Tea', 'InProgress', 'low');

changeStatus('test', 'InProgress');
changeStatus('learnJS', 'TODO');

deleteTask('Tea');
addTask('goToBed', 'TODO', 'low');
console.log(list);

showList();
