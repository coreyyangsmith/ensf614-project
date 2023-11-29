//-------------------------------------------------------//
//  File Name: FlightListHeader.jsx
//  Description: Header Display for Flight Info on Admin Panel
//
//  Requirements:
//      - ViewFlightsdByDate.jsx
//
//  Renders:
//      - Header Information
//
// Created By: Corey Yang-Smith
// Date: November 29th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import { Grid, Typography } from '@mui/material';
import React from 'react';

const FlightListHeader = () => {
	return (
		<Grid
			direction="row"
			container
			sx={{border: "1px solid white", width: "100%"}}
		>
			<Grid
				item
				xs={1}
			>
				<Typography>ID</Typography>
			</Grid>

			<Grid
				item
				xs={1}
			>
				<Typography>Date</Typography>
			</Grid>
			<Grid
				item
				xs={3}
			>
				<Typography>Departure</Typography>
			</Grid>

			<Grid
				item
				xs={3}
			>
				<Typography>Arrival</Typography>
			</Grid>

			<Grid
				item
				xs={2}
			>
				<Typography>Distance (km)</Typography>
			</Grid>

			<Grid
				item
				xs={2}
			>
				<Typography>Est. Duration</Typography>
			</Grid>
		</Grid>
	);
};

export default FlightListHeader;
