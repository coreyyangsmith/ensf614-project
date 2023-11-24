//-------------------------------------------------------//
//  File Name: SeatSelectionForm.jsx
//  Description: UserForm for Seat Selection
//
//  Requirements:
//      - SeatSelection.jsx
//
//  Renders:
//      - Seat Selection User Form
//
// Created By: Corey Yang-Smith
// Date: November 24th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Imports
import React from 'react';

// MUI Imports
import { Box, Button, Stack, Typography } from '@mui/material';

// My Component
import SummaryFlightDetails from "./SummaryFlightDetails"
import SummarySeatDetails from "./SummarySeatDetails"
import InsuranceSelection from "./InsuranceSelection"
import SummarySubtotal from "./SummarySubtotal"

//  STYLES
//-------------------------------------------------------//
const SeatSelectionForm = (props) => {
	const BoxSX = {
		height: '100%',
		width: '100%',
		border: '1px solid blue',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
	};

//  MAIN FUNCTION
//-------------------------------------------------------//
	/**
	 * getSeatName
	 * @param {*} row int: row number
	 * @param {*} col int: column number
	 * @returns 
	 */
	function getSeatName(seat) {
		var seatName = ""
		const col = seat.column_position;
		const row = seat.row_position;

		seatName = (row + 1).toString()
		seatName += String.fromCharCode(97 + col).toUpperCase()

		return seatName
	}

	/**
	 * getSeatType
	 * @param {*} seat Seat : Seat Object
	 * @returns String: Seat Type
	 */
	function getSeatType(seat) {
		console.log(seat)
		if (seat.type == "ORD") return "Ordinary"
		if (seat.type == "CMF") return "Comfort"
		if (seat.type == "BUS") return "Business Class"
	}

	/**
	 * getSeatCost
	 * @param {*} seat  Seat : Seat Object
	 * @returns String : Seat Cost
	 */
	function getSeatCost(seat) {
		var cost = seat.amount * seat.multiplier;
		var cost = "$" + cost

		return cost
	}

	// Once Active!
	if (props.selectedSeat !== undefined) {
		return <Box sx={BoxSX}>
      <Stack direction="column" spacing={1} sx={{paddingTop: "16px"}}>
		<SummaryFlightDetails/>
		<SummarySeatDetails/>
		<InsuranceSelection/>
		<SummarySubtotal/>


        <Typography>Selected Seat</Typography>
        <Typography>id: {props.selectedSeat.id}</Typography>
        <Typography>location: {getSeatName(props.selectedSeat)}</Typography>
        <Typography>type: {getSeatType(props.selectedSeat)}</Typography>
		<Typography>cost: {getSeatCost(props.selectedSeat)}</Typography>
		<Typography>Select Insurance</Typography>
		<Typography>Summarize Flight Details</Typography>
		<Button variant="outlined">Purchase Seat</Button>
	  </Stack>
    </Box>;
	}

	return (
		<Box sx={BoxSX}>
			<Typography
				variant="h3"
				sx={{ paddingTop: '16px', textAlign: 'center' }}
			>
				Select a Seat
			</Typography>
		</Box>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default SeatSelectionForm;


// Form Should be Broken Out into Multiple Sections
// --> Summarize Flight Details
//		Flight ID
//		Departure Date & Time
//		Duration
//		Arrival Date & Time

// --> Summarize Seat Details
//		Seat Type
//		Row & Column
//		

// --> Seat Insurance Selection
//		Select Insurance

// --> Subtotal
//		Subtotal
//		Insurance
//		Tax
//		Confirmation Button

// ONCE CLICKED, Redirect to Payment Form (to collect more info for ticket)
// Pass as prop the subtotal to payment for processing



// Should TICKETS have a refeerence to both a seat and a flight? Seat map should really populate available SEATS from TICKETS
// TICKETS can be 