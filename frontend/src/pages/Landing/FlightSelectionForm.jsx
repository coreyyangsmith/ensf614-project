//-------------------------------------------------------//
//  File Name: FlightSelectionForm.jsx
//  Description: Form Information for Flight Selection
//
//  Requirements:
//      - FlightSelectionMain.jsx
//
//  Renders:
//      - FlightSelectionForm.jsx
//
// Created By: Corey Yang-Smith
// Date: November 11th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Imports
import React from 'react';
import { useState } from 'react';

// MUI Imports
import { Button, ButtonGroup, Stack } from '@mui/material';

//  MAIN FUNCTION
//-------------------------------------------------------//
const FlightSelectionForm = (props) => {
	const [selectedTrip, setSelectedTrip] = useState('Return');

	return (
		<>
			<Stack direction="column">
				<ButtonGroup variant="outlined">
					<Button onClick={() => setSelectedTrip('Return')}>Return Trip</Button>
					<Button onClick={() => setSelectedTrip('OneWay')}>One-Way</Button>
				</ButtonGroup>

				<Stack direction="row"></Stack>

				<Stack direction="row"></Stack>
			</Stack>
		</>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default FlightSelectionForm;
