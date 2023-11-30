import {
	Button,
	Card,
	CardContent,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import React, { useEffect, useRef } from 'react';

import { useSeatsByAircraft } from '../../hooks/useSeatsByAircraft.js';

import NavigatinButtonFlight from '../../components/NavigationButtonFlight.jsx';
import { useTicketsByFlight } from '../../hooks/useTicketsByFlight.js';

const SeatCard = (props) => {
	const { seatsByAircraft } = useSeatsByAircraft(props.flight.aircraft_ref.id);
	const { ticketsByFlight } = useTicketsByFlight(props.flight.id);
	const totalSeats = useRef(0);
	const seatsTaken = useRef(0);


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
		if (ticketsByFlight && seatsByAircraft) {
			totalSeats.current = seatsByAircraft.length;
			seatsTaken.current = ticketsByFlight.length;
		}
	}, [ticketsByFlight, seatsByAircraft]);

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
					{seatsTaken.current}/{totalSeats.current}
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
