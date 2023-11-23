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


	return (
		<Card sx={{ width: "100%"}}>
			<CardContent sx={{height: "100%", width: "100%"}}>
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
						container
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
						container
						item
						xs={6}
						sx={{ display: 'flex', justifyContent: 'center' }}
					>
						<Typography sx={{ display: 'flex', alignItems: 'center' }}>
							{convertDateTimeToDuration(props.flight.departure_time)}
						</Typography>
					</Grid>
					<Grid
						container
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
					direction="column"
					sx={{
						height: '150px',
						background: '#121212',
						borderTop: '1px solid white',
						borderBottomLeftRadius: '15px',
						borderBottomRightRadius: '15px',
					}}
				>
					<Grid
						container
						item
						xs={5}
					>
						<Stack
							direction="row"
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Typography
								sx={{
									display: 'flex',
									alignItems: 'flex-end',
									marginLeft: '5%',
								}}
							>
								{props.flight.start_point.name}
							</Typography>
							<Typography
								sx={{
									display: 'flex',
									alignItems: 'flex-end',
									marginRight: '5%',
								}}
							>
								{props.flight.end_point.name}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						container
						item
						xs={2}
					>
						<Stack
							direction="row"
							sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
						>
							<div
								style={{
									color: 'white',
									backgroundColor: 'white',
									borderRadius: '50%',
									height: '15px',
									width: '15px',
									marginLeft: '5%',
								}}
							></div>
							<hr
								style={{
									color: 'white',
									backgroundColor: 'white',
									height: '1.5px',
									display: 'flex',
									alignItems: 'center',
									width: '100%',
								}}
							></hr>
							<div
								style={{
									color: 'white',
									backgroundColor: 'white',
									borderRadius: '50%',
									height: '15px',
									width: '15px',
									marginRight: '5%',
								}}
							></div>
						</Stack>
					</Grid>
					<Grid
						container
						item
						xs={5}
					>
						<Stack
							direction="row"
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Typography
								sx={{
									display: 'flex',
									alignItems: 'flex-start',
									marginLeft: '5%',
								}}
							>
								{props.flight.start_point.airport_code}
							</Typography>
							<Typography
								sx={{
									display: 'flex',
									alignItems: 'flex-start',
									marginRight: '5%',
								}}
							>
								{props.flight.end_point.airport_code}
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default FlightCard;
