//-------------------------------------------------------//
//  File Name: FlightSelectionMain.jsx
//  Description: Main Components for Flight Selection
//
//  Requirements:
//      - Landing.jsx
//
//  Renders:
//      - FlightSelectionMain.jsx and all sub components
//
// Created By: Corey Yang-Smith
// Date: November 11th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useRef } from 'react';

// MUI Import
import { Paper, Typography, Stack } from '@mui/material';

// My Component Imports
import FlightSelectionButton from './FlightSelectionButton';
import FlightSelectionForm from './FlightSelectionForm';

//  STYLES
//-------------------------------------------------------//
const frostedGlassSX = {
	background: 'rgba(255,255,255,.15)',
	backdropFilter: 'blur(5px)',
	display: 'flex',
	padding: '16px',
	zIndex: "10",
	width: "600px",
	marginLeft: "15vw",
	marginTop: "25vh"
};

//  MAIN FUNCTION
//-------------------------------------------------------//

const FlightSelectionMain = (props) => {
	
	const formFilled = useRef(false)

	return (
		<Paper sx={frostedGlassSX}>
			<Stack
				direction="column"
				spacing={3}
			>
				<Typography>Select Flight Information</Typography>
				<FlightSelectionForm
					formFilled={formFilled}
					destinations={props.destinations}

				/>
				<FlightSelectionButton formFilled={formFilled} />
			</Stack>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default FlightSelectionMain;
