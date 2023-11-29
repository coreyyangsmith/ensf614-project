//-------------------------------------------------------//
//  File Name: ViewFlightsByDate.jsx
//  Description: Main Component for Cancel Flight
//
//  Requirements:
//      - AdminView.jsx
//
//  Renders:
//      - FlightList by Selected Date
//
// Created By: Corey Yang-Smith
// Date: November 29th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//
// React Import
import React, { useState } from 'react';

// MUI Imports
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Day JS
import dayjs from 'dayjs';

// Config Import
import { NUM_DAYS } from '../../utils/config.js';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { useFlightsByDate } from '../../hooks/useFlightsByDate.js';
import { useFlights } from '../../hooks/useFlights.js';

const ViewFlightsByDate = () => {
	const [selectedDate, setSelectedDate] = useState('');
	const [flightsByDate, setFlightsByDate] = useState([]);
	const startDate = dayjs(new Date());
	const endDate = dayjs(new Date()).add(NUM_DAYS, 'days');
	const { flights } = useFlights();

	const handleSubmit = () => {
		var flightsOnSelectedDate = [];
		flights.forEach((el) => {
			if (el.date == selectedDate) flightsOnSelectedDate.push(el);
		});
		setFlightsByDate(flightsOnSelectedDate);
	};

	const flightList = flightsByDate.map((flight, index) => {
		return (
			<Grid
				direction="row"
				container
                key={flight.id}
			>
				<Grid
					item
					xs={2}
				>
					<Typography>id: {flight.id}</Typography>
				</Grid>

				<Grid
					item
					xs={2}
				>
					<Typography>date: {flight.date}</Typography>
				</Grid>
				<Grid
					item
					xs={2}
				>
					<Typography>departure: {flight.start_point.name}</Typography>
				</Grid>

				<Grid
					item
					xs={2}
				>
					<Typography>arrival: {flight.end_point.name}</Typography>
				</Grid>

				<Grid
					item
					xs={2}
				>
					<Typography>distance: {parseFloat(flight.distance).toFixed(2)}</Typography>
				</Grid>

				<Grid
					item
					xs={2}
				>
					<Typography>duration: {flight.est_duration}</Typography>
				</Grid>                                
			</Grid>
		);
	});

	return (
		<>
			<Stack
				direction="column"
				spacing={2}
				sx={{width: '100%', padding: '16px' }}
			>
				<Typography>View Flights by Selected Date</Typography>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						label="Select Flight Date"
						required
						placeholderText="Select date"
						minDate={startDate}
						maxDate={endDate}
						onChange={(event, item) => {
							setSelectedDate(dayjs(event.$d).format('YYYY-MM-DD'));
						}}
						selected={selectedDate}
					/>
				</LocalizationProvider>

				<Button
					variant="outlined"
					onClick={() => handleSubmit()}
				>
					View Flights
				</Button>
			</Stack>

			<Stack
				direction="column"
				spacing={0.5}
			>
				{flightList}
			</Stack>
		</>
	);
};

export default ViewFlightsByDate;
