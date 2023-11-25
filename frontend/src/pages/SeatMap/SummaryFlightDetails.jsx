//-------------------------------------------------------//
//  File Name: SummaryFlightDetails.jsx
//  Description: Flight Details Box for Seat Selection Information
//
//  Requirements:
//      - SeatSelectionForm.jsx
//
//  Renders:
//      - Flight Details
//
// Created By: Corey Yang-Smith
// Date: November 24th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

//  MAIN FUNCTION
//-------------------------------------------------------//
const SummaryFlightDetails = (props) => {
	let { state } = useLocation();

	return (
		<Paper elevation={2}>
			<Grid
				container
				direction="column"
			>
				<Grid
					container
					item
					xs={3}
					sx={{ border: '1px solid white' }}
				>
					<Typography sx={{ display: 'flex', justifyContent: 'center' }}>
						Flight Details
					</Typography>
				</Grid>

				<Grid
					container
					item
					xs={9}
				>
					<Typography>Flight Id:{state.flight.id}</Typography>
					<Typography>
						{state.flight.start_point.airport_code} to{' '}
						{state.flight.end_point.airport_code}
					</Typography>
					<Typography>Departure:{state.flight.departure_time}</Typography>
					<Typography>Flight Duration:{state.flight.est_duration}</Typography>
					<Typography>Arrival:{state.flight.arrival_time}</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default SummaryFlightDetails;
