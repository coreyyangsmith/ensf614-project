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
import { Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailLineItem from './DetailLineItem';
import TitleLineItem from './TitleLineItem';

//  MAIN FUNCTION
//-------------------------------------------------------//
const SummaryFlightDetails = (props) => {
	let { state } = useLocation();

	return (
		<Paper elevation={4} sx={{background: "#161616", borderRadius: "15px"}}>
			<Grid
				container
				direction="column"
			>
				<TitleLineItem title="FLIGHT DETAILS" />
				

				<Grid
					container
					item
					xs={9}
					sx={{paddingTop: "8px", marginBottom: "12px"}}
				>
					<DetailLineItem description="Flight ID" value={state.flight.id}/>

					<DetailLineItem description="Departure" value=""/>
					<DetailLineItem description={state.flight.start_point.airport_code} value={state.flight.departure_time}/>

					<DetailLineItem description="Arrival" value=""/>
					<DetailLineItem description={state.flight.end_point.airport_code} value={state.flight.arrival_time}/>
					<DetailLineItem description="Flight Duration" value={state.flight.est_duration}/>
				</Grid>
			</Grid>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default SummaryFlightDetails;
