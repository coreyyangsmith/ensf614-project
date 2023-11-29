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

// React Router Dom
import { useLocation } from 'react-router-dom';

import { useSeatsAvailable } from '../../hooks/useSeatsAvailable';

//  MAIN FUNCTION
//-------------------------------------------------------//

const Seat = (props) => {
	let { state } = useLocation();

	/**
	 *
	 * @param {*} row int: row number
	 * @param {*} col int: column number
	 * @returns
	 */
	function getSeatName(seat) {
		var seatName = '';
		const col = seat.column_position;
		const row = seat.row_position;

		seatName = (row + 1).toString();
		seatName += String.fromCharCode(97 + col).toUpperCase();

		return seatName;
	}

	/**
	 * getSeatCost
	 * @param {*} seat  Seat : Seat Object
	 * @returns String : Seat Cost
	 */
	function getSeatCost(seat) {
		var cost = seat.amount * seat.multiplier;
		var cost = '$' + cost;

		return cost;
	}

	function handleChange() {
		props.setSelectedSeat(props.seat);
	}
	if (useSeatsAvailable(props.seat.id, state.flight.id).seatAvailable) {
		return (
			<Button
				size="small"
				sx={{ width: '60px', height: '60px', background: '#045200' }}
				onClick={(e) => handleChange()}
			>
				<Stack direction="column">
					<Typography sx={{ fontSize: 10 }}>
						{getSeatName(props.seat)}
					</Typography>
					<Typography sx={{ fontSize: 10 }}>{props.seat.type}</Typography>
					<Typography sx={{ fontSize: 10 }}>
						{getSeatCost(props.seat)}
					</Typography>
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
