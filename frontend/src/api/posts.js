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
import axios from 'axios'


//  MAIN FUNCTION
//-------------------------------------------------------//

const axiosClient = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`
});


export function getRequest(URL, payload) {
    return axiosClient.get(`/${URL}`, payload).then(response => response);
}

export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function putRequest(URL, payload) {
    return axiosClient.put(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL, payload) {
    return axiosClient.delete(`/${URL}`, payload).then(response => response);
}

export function getPassengersByFlight(flightId) {
    return axiosClient.get(`/flights/${flightId}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching passengers:', error);
            throw error;
        });
}

// export function getPassengersByFlight(flightId) {
//     return axiosClient.get(`/flights/${flightId}/`)
//         .then(response => response.data)
//         .catch(error => {
//             console.error('Error fetching passengers:', error);
//             throw error;
//         });
// }