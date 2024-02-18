'use strict';
console.log("Timer");

import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import Error from '../img/bi_x-octagon.svg';
import "izitoast/dist/css/iziToast.min.css";

//require("/flatpickr/dist/themes/dark.css");
const inputDate = document.querySelector('#datetime-picker');
inputDate.classList.add('dataset');
const btnStart = document.querySelector('[data-start]');
btnStart.classList.add('startbutton');

btnStart.addEventListener('mouseover', function () {
	btnStart.classList.add('hover');
});

btnStart.addEventListener('mouseout', function () {
	btnStart.classList.remove('hover');
});
inputDate.addEventListener('mouseover', function () {
	inputDate.classList.add('hover');
});

inputDate.addEventListener('mouseout', function () {
	inputDate.classList.remove('hover');
});
let intervalId = null;
let userSelectedDate = null;

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		console.log(selectedDates[0]);
		userSelectedDate = selectedDates[0];

	},
};

flatpickr("#datetime-picker", options);


function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}


function selectedDates() {
	if (!userSelectedDate || userSelectedDate.getTime() <= new Date().getTime()) {
		iziToast.error({
			class: 'popup-message',
			theme: 'dark',
			backgroundColor: '#ef4040',
			messageColor: '#fff',
			position: 'topRight',
			pauseOnHover: true,
			timeout: 3000,
			iconUrl: Error,
			title: 'Error',
			message: 'Please choose a date in the future',
		});
		document.querySelector('[data-start]').disabled = true;
	} else {
		document.querySelector('[data-start]').disabled = false;
		inputDate.classList.add('active');


	}
}

document.querySelector('[data-start]').addEventListener("click", () => {
	clearInterval(intervalId);
	selectedDates();

	const selectedDate = userSelectedDate;

	const currentDate = new Date();

	let differenceMs = selectedDate.getTime() - currentDate.getTime();

	if (differenceMs > 0) {
		btnStart.classList.add('disable');
		inputDate.classList.add('disable');

		intervalId = setInterval(() => {

			let { days, hours, minutes, seconds } = convertMs(differenceMs);
			document.querySelector('[data-days]').textContent = addLeadingZero(days);
			document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
			document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
			document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);


			if (differenceMs <= 0) {
				differenceMs = 0;
				clearInterval(intervalId);
				document.querySelector('[data-start]').disabled = false;
				document.querySelector('#datetime-picker').disabled = false;
				btnStart.classList.remove('disable');
			}


			differenceMs = differenceMs - 1000;
		}, 1000);


		document.querySelector('[data-start]').disabled = true;
		document.querySelector('#datetime-picker').disabled = true;
	}
});

function addLeadingZero(value) {
	if (value < 10) {
		return value.toString().padStart(2, '0');
	} else {
		return value.toString();
	}

};

const inputDates = document.querySelectorAll('flatpickr - input');
inputDates.forEach(inputDate => {

	inputDate.classList.add('dataset');
});
