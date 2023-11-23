import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const FlightCard = (props) => {
	const convertDateTimeTo24H = (dateTimeString) => {
		let date = new Date(dateTimeString);
		let formattedTime = date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		});

		return formattedTime;
	};

	const convertDateTimeToDuration = (dateTimeString) => {
		let date = new Date(dateTimeString);
		let formattedTime = date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		});

		let hoursString = formattedTime.slice(0, 2);
		let minutesString = formattedTime.slice(3, 5);

		if (hoursString[0] == '0') hoursString = hoursString[1];

		let finalString = hoursString + 'h ' + minutesString + 'm';

		return finalString;
	};

	console.log(props.flight);
	return (
		<Card sx={{ border: '1px solid white' }}>
			<CardContent>
				<Stack direction="column">
					{/* Top Info Bar */}
					<Grid
						container
						sx={{
							height: '35px',
							background: '#121212',
							borderTopLeftRadius: '15px',
							borderTopRightRadius: '15px',
						}}
						direction="row"
					>
						<Grid
							containter
							item
							xs={3}
							sx={{ display: 'flex', justifyContent: 'flex-start' }}
						>
							<Typography
								sx={{
									paddingLeft: '16px',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								{convertDateTimeTo24H(props.flight.departure_time)}
							</Typography>
						</Grid>
						<Grid
							containter
							item
							xs={6}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<Typography sx={{ display: 'flex', alignItems: 'center' }}>
								{convertDateTimeToDuration(props.flight.departure_time)}
							</Typography>
						</Grid>
						<Grid
							containter
							item
							xs={3}
							sx={{ display: 'flex', justifyContent: 'flex-end' }}
						>
							<Typography
								sx={{
									paddingRight: '16px',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								{convertDateTimeTo24H(props.flight.arrival_time)}
							</Typography>
						</Grid>
					</Grid>

					{/* Flight Content */}
					<Grid
						container
						sx={{
							height: '150px',
							background: '#121212',
							border: '1px solid white',
						}}
					>
						<Stack direction="horizontal" sx={{display: 'flex', alignItems: 'center'}}>
							<div
								style={{
									color: 'white',
									backgroundColor: 'white',
									borderRadius: '50%',
									height: '15px',
									width: '15px',
								}}
							></div>
							<hr
								style={{
									color: 'white',
									backgroundColor: 'white',
									height: '1.5px',
									display: 'flex',
									alignItems: 'center',
									width: "100%"
								}}
							></hr>
							<div
								style={{
									color: 'white',
									backgroundColor: 'white',
									borderRadius: '50%',
									height: '15px',
									width: '15px',
								}}
							></div>
						</Stack>
					</Grid>

					<Typography>From: {props.flight.start_point.airport_code}</Typography>
					<Typography> To: {props.flight.end_point.airport_code}</Typography>
					<Typography> Date: {props.flight.date}</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default FlightCard;
