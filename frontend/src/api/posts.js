//-------------------------------------------------------//
//  File Name: posts.js
//  Description: Utilizes axios to connect to main back-end api (unauthenticated).
//
//  Requirements:
//      - None
//
//  Returns:
//      - REST api to selected back-end
//
// Created By: Corey Yang-Smith
// Date: November 11th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// Import Axios
import axios from 'axios';

//  MAIN FUNCTION
//-------------------------------------------------------//

const axiosClient = axios.create({
	baseURL: `http://127.0.0.1:8000/api/`,
});

export function getRequest(URL, payload) {
	return axiosClient.get(`/${URL}`, payload).then((response) => response);
}

export function postRequest(URL, payload) {
	return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

export function putRequest(URL, payload) {
	return axiosClient.put(`/${URL}`, payload).then((response) => response);
}

export function deleteRequest(URL, payload) {
	return axiosClient.delete(`/${URL}`, payload).then((response) => response);
}

export function getPassengersByFlight(flightId) {
	return axiosClient
		.get(`/flights/${flightId}`)
		.then((response) => response.data)
		.catch((error) => {
			console.error('Error fetching passengers:', error);
			throw error;
		});
}

export function getCrewsByFlight(flightId) {
	return axiosClient
		.get(`/crewsbyflight/${flightId}`)
		.then((response) => response.data)
		.catch((error) => {
			console.error('Error fetching passengers:', error);
			throw error;
		});
}

export function queryFlights(info) {
	return axiosClient
		.get(`/queryflights`, {
			params: { info: info },
			data: {},
		})
		.then((response) => response.data)
		.catch((error) => {
			console.error('Error fetching flights:', error);
			throw error;
		});
}

export function loginUser(credentials) {
	return axiosClient
		.post('/login/', credentials)
		.then((response) => {
			// store the tokens in local storage
			localStorage.setItem('access_token', response.data.access);
			localStorage.setItem('refresh_token', response.data.refresh);
			localStorage.setItem('username', credentials.username);

			// set the default Authorization header
			axiosClient.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');

			return response.data;
		})
		.catch((error) => {
			console.error('Error during login:', error);
			throw error;
		});
}

export function registerUser(credentials) {
	return axiosClient
		.post('/register/', credentials)
		.then((response) => {
			// store the tokens in local storage
			localStorage.setItem('access_token', response.data.access);
			localStorage.setItem('refresh_token', response.data.refresh);
			localStorage.setItem('username', credentials.username);

			// set the default Authorization header
			axiosClient.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');

			return response.data;
		})
		.catch((error) => {
			console.error('Error during registration:', error);
			throw error;
		});
}

export function saveStripeInfo(data = {}) {
	return axiosClient
		.post('/payments/save-stripe-info/', data)
		.then((response) => response.data)
		.catch((error) => {
			console.error('Error saving Stripe info:', error);
			throw error;
		});
}

