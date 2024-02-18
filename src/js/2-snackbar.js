'use strict';
console.log("Snackbar");

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";
import Success from '../img/bi_check2-circle.svg';
import Error from '../img/bi_x-octagon.svg';
import Warning from '../img/bi_exclamation-triangle.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
	event.preventDefault();

	const delayInput = document.querySelector('input[name="delay"]');
	const delay = parseInt(delayInput.value);

	const stateInput = document.querySelector('input[name="state"]:checked');
	const state = stateInput ? stateInput.value : null;

	if (delay && state) {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				if (state === 'fulfilled') {
					resolve(delay);
				} else if (state === 'rejected') {
					reject(delay);
				}
			}, delay);
		});

		promise.then((delay) => {
			iziToast.success({
				class: 'popup-message',
				theme: 'dark',
				backgroundColor: '#59A10D',
				messageColor: '#fff',
				position: 'topRight',
				pauseOnHover: true,
				timeout: 3000,
				iconUrl: Success,
				title: 'Success',
				message: `✅ Fulfilled promise in ${delay}ms`,
			});
		}).catch((delay) => {
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
				message: `❌ Rejected promise in ${delay}ms`,
			});
		});
	} else {
		iziToast.warning({
			class: 'popup-message',
			theme: 'dark',
			backgroundColor: '#FFA000',
			messageColor: '#fff',
			position: 'topRight',
			pauseOnHover: true,
			timeout: 3000,
			iconUrl: Warning,
			title: 'Warning',
			message: 'Please select delay and state options.',
		});
	}
});





/*
const popupHandler = (delay, state) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (state === 'fulfilled') {
				resolve(`Fulfilled promise in ${delay}ms`);
			} else {
				reject(`Rejected promise in ${delay}ms`);
			}
		}, delay);
	});




	promise
		.then((value) => {
			iziToast.success({
				class: 'popup-message',
				theme: 'dark',
				backgroundColor: '#59A10D',
				messageColor: '#fff',
				iconUrl: Success,
				position: 'topRight',
				pauseOnHover: true,
				timeout: 3000,
				message: value,
			})
		})
		.catch((value) => {
			iziToast.error({
				class: 'popup-message',
				theme: 'dark',
				backgroundColor: '#ef4040',
				messageColor: '#fff',
				iconUrl: Error,
				position: 'topRight',
				pauseOnHover: true,
				timeout: 3000,
				message: value,
			})
		})
}

const initForm = () => {
	const form = document.querySelector('.form');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		popupHandler(form.delay.value, form.state.value);
	});
}

initForm();
*/