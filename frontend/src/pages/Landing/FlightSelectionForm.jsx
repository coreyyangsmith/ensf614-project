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
import DestinationArrivalForm from './DestinationArrivalForm';

//CSS
import './landing.css';
import PassengerButtonGroup from './PassengerButtonGroup';
import SeatSelectionRadio from './SeatSelectionRadio';

//  MAIN FUNCTION
//-------------------------------------------------------//
const FlightSelectionForm = (props) => {
	const [selectedTrip, setSelectedTrip] = useState('Return');
	const [passenegers, setPassengers] = useState(1);
	const [seatSelection, setSeatSelection] = useState('');
	const [departureDate, setDepartureDate] = useState(undefined);
	const [arrivalDate, setArrivalDate] = useState(undefined);

	// TODO expand this logic to ensure flight selection is "mostly" valid
	if (seatSelection !== "") {
		props.formFilled.current = true
	}
	console.log(selectedTrip)
	return (
		<>
			<Stack
				direction="column"
				spacing={1}
			>
				<ButtonGroup variant="outlined">
					<Button
						className={`flight-button ${selectedTrip === 'Return' && 'active'}`}
						onClick={() => setSelectedTrip('Return')}
					>
						Return Trip
					</Button>
					<Button
						className={`flight-button ${selectedTrip === 'OneWay' && 'active'}`}
						onClick={() => setSelectedTrip('OneWay')}
					>
						One-Way
					</Button>
				</ButtonGroup>
				<DestinationArrivalForm
					data={props.destinations}
					where="From"
					depLabel="Departure Date"
					selectedTrip={selectedTrip}
					date={departureDate}
					setDate={setDepartureDate}
				/>
				<DestinationArrivalForm
					data={props.destinations}
					where="To"
					depLabel="Arrival Date"
					selectedTrip={selectedTrip}
					date={arrivalDate}
					setDate={setArrivalDate}					
				/>
				<Stack direction="row" spacing={1}>
				<PassengerButtonGroup
					setPassengers={setPassengers}
					passenegers={passenegers}
				/>
				<SeatSelectionRadio
					seatSelection={seatSelection}
					setSeatSelection={setSeatSelection}
				/>
				</Stack>


				<Stack direction="row"></Stack>
			</Stack>
		</>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default FlightSelectionForm;
