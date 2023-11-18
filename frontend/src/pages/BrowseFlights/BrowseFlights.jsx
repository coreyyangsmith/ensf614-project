import { Paper, Stack, Typography } from '@mui/material';
import { useFlights } from '../../hooks/useFlights.js';

// STYLES
//-------------------------------------------------------//

const paperSX = {
	display: 'flex',

	boxShadow: 3,
	border: '2px solid black',
	'&:hover': {
		boxShadow: 12,
	},
};

// MAIN FUNCTION
//-------------------------------------------------------//
function BrowseFlights() {
	const { flights } = useFlights();

	const displayFlights = flights.map((flight, index) => {
		return (
			<Paper
				sx={paperSX}
				key={flight.id}
				elevation={2}
			>
				<Stack
					direction="row"
					spacing={1}
				>
					<Typography variant="h6">ID: {flight.id} |</Typography>
					<Typography variant="h6">From: {flight.start_point.name}  |</Typography>
					<Typography variant="h6">To: {flight.end_point.name} |</Typography>
					<Typography variant="h6"> 
						Aircraft: {flight.aircraft_ref.type}
					</Typography>
				</Stack>
			</Paper>
		);
	});

	if (flights.length == 0) {
		return <p style={{ color: 'red' }}>loading flights...</p>;
	}

	return (
		<>
			<h2 style={{ color: 'black' }}>Available Flights</h2>
			<Stack direction="column" spacing={0.5}>{displayFlights}</Stack>
		</>
	);
}

// EXPORTS
//-------------------------------------------------------//
export default BrowseFlights;
