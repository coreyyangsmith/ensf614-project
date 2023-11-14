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
import { Button, Paper } from '@mui/material';
import React, { useState } from 'react';

//  MAIN FUNCTION
//-------------------------------------------------------//

const Seat = (props) => {
	const [available, setAvailable] = useState(true)

	function handleChange() {
		setAvailable(!available)
	}

	if (available) {
		return (
			<Button
				size="small"
				sx={{ width: '60px', height: '60px', background: '#045200' }}
				onClick={(e) => handleChange(available)}
			>
				O
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
