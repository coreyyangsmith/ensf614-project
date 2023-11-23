import { Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';

const FlightCard = (props) => {
	console.log(props.flight);
	return (
		<Card>
			<CardContent>
				<Stack direction="row">
					<Typography>From: {props.flight.start_point.airport_code}</Typography>
                    <Typography> To: {props.flight.end_point.airport_code}</Typography>
                    <Typography> Date: {props.flight.date}</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default FlightCard;
