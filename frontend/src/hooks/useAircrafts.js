//-------------------------------------------------------//
//  File Name: useAircrafts.js
//  Description: Data Fetching Hook to obtain "Aircraft" model from the local database
//
//  Requirements:
//      - /api/posts (axios)
//
//  Returns:
//      - List of Aircrafts
//
// Created By: Corey Yang-Smith
// Date: November 13th, 203
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useEffect, useState } from 'react';

// API Import
import { getRequest } from '../api/posts';

//  MAIN FUNCTION
//-------------------------------------------------------//

export const useDestinations = () => {
	const [aircrafts, setAircrafts] = useState([]);

	const fetchData = async () => {
		try {
			const response = await getRequest('aircrafts/', '');
			if (response && response.data) {
				setAircraft(response.data);
			}
		} catch (err) {
			if (err.response) {
				//Not in 200 Response Range
				console.log(err.response.data);
				console.log(err.response.status);
				console.log(err.response.headers);
			} else {
				console.log(`Error: ${err.message}`);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { aircrafts, setAircrafts };
};
