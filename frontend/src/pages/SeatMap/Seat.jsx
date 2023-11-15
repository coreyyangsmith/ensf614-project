//-------------------------------------------------------//
//  File Name: Seat.jsx
//  Description: Single Seat component for Flight SeatMap
//
//  Requirements:
//      - TODO.jsx
//
//  Renders:
//      - Single seat object
//
// Created By: Corey Yang-Smith
// Date: November 13th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

//  MAIN FUNCTION
//-------------------------------------------------------//

const Seat = (props) => {
	// type
	// cost
	// row position
	// column position

	/**
	 * 
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
		console.log(seatName)

		return seatName
	}

	function getSeatCost(seat) {
		return "$140"
	}

	function handleChange() {
		setAvailable(!available)
	}

	if (props.seat.available) {
		return (
			<Button
				size="small"
				sx={{ width: '60px', height: '60px', background: '#045200' }}
				onClick={(e) => handleChange(available)}
			>
				<Stack direction="column">
				<Typography sx={{fontSize: 10}}>{getSeatName(props.seat)}</Typography>
				<Typography sx={{fontSize: 10}}>{props.seat.type}</Typography>
				<Typography sx={{fontSize: 10}}>{getSeatCost(props.seat)}</Typography>
				</Stack>
			</Button>
		);
	} else {
		return (
			<Button
				sx={{ width: '60px', height: '60px', background: '#240000' }}
				disabled
			>
				X
			</Button>
		);
	}
};

//  EXPORTS
//-------------------------------------------------------//
export default Seat;
