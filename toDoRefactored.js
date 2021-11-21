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
	let lowTitle = 'Low:';
	let low = 'low';
	let highTitle = 'High:';
	let high = 'high';
	let criticalTitle = 'Critical:';
	let critical = 'critical';

	function getTasksByStatus(status, statusTitle) {
		let fullTaskInfo;
		let count = 0;

		function getList(item, index, array) {
			if (item.status == status) {
				count = count + 1;
				return item; // Так можно увидеть задачу как объект
			}
		}
		console.log('\n', statusTitle);
		fullTaskInfo = list.filter(getList);

		let isEmptyTask = count === 0 || fullTaskInfo[0] === undefined;

		if (isEmptyTask) {
			console.log(emptyTaskList);
			return;
		}
		console.log(fullTaskInfo);
	}

	function groupTasksByPryority(priority, priorityTitle) {
		let fullTaskInfo;
		let count = 0;

		function getList(item, index, array) {
			if (item.priority == priority) {
				count = count + 1;
				return console.log(item.name);
			}
		}
		console.log('\n', priorityTitle);

		list.filter(getList);
		if (count === 0) {
			console.log(emptyTaskList);
		}
	}

	getTasksByStatus(TODO, toDOTitle);
	getTasksByStatus(PROGRESS, ProgressTitle);
	getTasksByStatus(DONE, DoneTitle);

	groupTasksByPryority(low, lowTitle);
	groupTasksByPryority(high, highTitle);
	groupTasksByPryority(critical, criticalTitle);
}

addTask('test', 'TODO', 'high');
addTask('learnJS', 'InProgress', 'high');
addTask('Arr', 'InProgress', 'critical');
addTask('Tea', 'InProgress', 'low');

changeStatus('test', 'InProgress');
changeStatus('learnJS', 'TODO');

deleteTask('Tea');
addTask('goToBed', 'TODO', 'low');

showList();
