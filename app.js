let clock = document.getElementById('time');
let day = document.getElementById('day'); 
let fullDate = document.getElementById('info');

let dayOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let mouthOfYear = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let hours = 0;
let minutes = 0;
let seconds = 0;


function getTime() {
	const timeNow = new Date();
	hours = (timeNow.getHours() < 10) ? `0${timeNow.getHours()}` : `${timeNow.getHours()}`;
	minutes = (timeNow.getMinutes() < 10) ? `0${timeNow.getMinutes()}` : `${timeNow.getMinutes()}`;
	seconds = (timeNow.getSeconds() < 10) ? `0${timeNow.getSeconds()}` : `${timeNow.getSeconds()}`;
	clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

function showDay () {
	let dayNow = new Date();
	day.innerHTML += `${dayOfWeek[dayNow.getDay()]}`;
}

function showFullDate() {
	let DateNow = new Date();
	fullDate.innerHTML = `${DateNow.getDate()} ${mouthOfYear[DateNow.getMonth()]} ${DateNow.getFullYear()}`;
}

showDay();
showFullDate();
setInterval(getTime, 1000);