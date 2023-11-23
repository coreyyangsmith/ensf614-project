import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { useSeatsByAircraft } from '../../hooks/useSeatsByFlight';

// get seats from flight

const SeatCard = (props) => {
	const { seatsByAircraft } = useSeatsByAircraft(props.flight.aircraft_ref.id);

	const seatsAvailable = useRef(0);
	const [seatsTaken, setSeatsTaken] = useState(0);

	useEffect(() => {
		var seatsAvailableList = [];
		var seatsTakenList = [];
		seatsByAircraft.filter((el) => {
			if (el.available) seatsAvailableList.push(el);
			else seatsTakenList.push(el);
		});

		const sAvailable = seatsAvailableList.length;
		const sTaken = seatsTakenList.length;
		seatsAvailable.current = sAvailable;
		setSeatsTaken(sTaken);
	}, [seatsTaken]);

	console.log(seatsAvailable);

	return (
		<Card sx={{ width: '100%', background: '#121212', borderRadius: "15px" }}>
			<CardContent sx={{height: "100%"}}>
				<Stack direction="column" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',  height: "100%"}} spacing={2}>
					<Typography>Seats Available</Typography>
					<Typography variant="h4">
						{seatsAvailable.current}/{seatsTaken + seatsAvailable.current}
					</Typography>
					<Button variant="contained">Find Seat</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default SeatCard;
