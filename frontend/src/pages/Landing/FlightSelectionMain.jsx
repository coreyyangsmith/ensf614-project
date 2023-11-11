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
import React, { useState } from 'react';

// MUI Import
import { Paper, Typography, Stack } from '@mui/material';

// My Component Imports
import FlightSelectionButton from './FlightSelectionButton';
import FlightSelectionForm from './FlightSelectionForm';

// Custom Hooks
import { useDestinations } from '../../hooks/useDestinations';

//  STYLES
//-------------------------------------------------------//
const frostedGlassSX = {
	background: 'rgba(255,255,255,.15)',
	backdropFilter: 'blur(5px)',
	width: '35vw',
	padding: '16px',
	marginLeft: '15vw',
};

//  MAIN FUNCTION
//-------------------------------------------------------//

const FlightSelectionMain = () => {
	const [formFilled, setFormFilled] = useState(false);
	const { destinations } = useDestinations();

	return (
		<Paper sx={frostedGlassSX}>
			<Stack
				direction="column"
				spacing={3}
			>
				<Typography>Select Flight Information</Typography>
				<FlightSelectionForm
					setFormFilled={setFormFilled}
					destinations={destinations}
				/>
				<FlightSelectionButton formFilled={formFilled} />
			</Stack>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default FlightSelectionMain;
