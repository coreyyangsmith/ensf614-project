import {
	Button,
	Card,
	CardContent,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { useSeatsByAircraft } from '../../hooks/useSeatsByAircraft.js';
import { getPassengersByFlight } from '../../api/posts';

import NavigatinButtonFlight from '../../components/NavigationButtonFlight.jsx';


const SeatCard = (props) => {
	const { seatsByAircraft } = useSeatsByAircraft(props.flight.aircraft_ref.id);

	const tickets = useRef([]);
	const seatsAvailable = useRef(0);
	const [seatsTaken, setSeatsTaken] = useState(0);

	// Generic helper function that can be used for the three operations:
	function operation(list1, list2, isUnion) {
		var result = [];

		for (var i = 0; i < list1.length; i++) {
			var item1 = list1[i],
				found = false;
			for (var j = 0; j < list2.length && !found; j++) {
				found = item1.userId === list2[j].userId;
			}
			if (found === !!isUnion) {
				// isUnion is coerced to boolean
				result.push(item1);
			}
		}
		return result;
	}

	// Following functions are to be used:
	function inBoth(list1, list2) {
		return operation(list1, list2, true);
	}

	useEffect(() => {
		var seatsAvailableList = [];
		var seatsTakenList = [];

		var takenSeats = [];

		// Get Tickets By Flight
		if (props.flight) {
			getPassengersByFlight(props.flight.id)
				.then((data) => {
					tickets.current = data;
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		} else {
			tickets.current = []
		}

		// Find Seats Taken on Flight
		tickets.current.forEach((ticket) => {
			takenSeats.push(ticket.seat_ref);
		});

		let both = inBoth(takenSeats, seatsByAircraft, true);

		const sAvailable = seatsByAircraft.length;
		const sTaken = both.length;

		seatsAvailable.current = sAvailable;
		setSeatsTaken(sTaken);

	}, [tickets.current]);

	return (
		<Card sx={{ width: '100%', background: '#121212', borderRadius: '15px' }}>
			<Stack
				direction="column"
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
				}}
				spacing={2}
			>
				<Typography>Seats Available</Typography>
				<Typography variant="h4">
					{seatsAvailable.current}/{seatsTaken + seatsAvailable.current}
				</Typography>
				<NavigatinButtonFlight
					label="Find Seat"
					path={`/flights/${props.flight.id}`}
					flight={props.flight}
				></NavigatinButtonFlight>
			</Stack>
		</Card>
	);
};

export default SeatCard;
