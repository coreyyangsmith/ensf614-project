import { Paper, Stack, Typography } from '@mui/material';
import { useFlights } from '../../hooks/useFlights.js'

// MAIN FUNCTION
//-------------------------------------------------------//
function BrowseFlights() {
    const { flights } = useFlights();

    const displayFlights = flights.map((flight, index) => {
        console.log(flight)
        return (
            <Paper key={flight.id}>
                <Stack direction="row" spacing={1}>
                <Typography variant='h6'>ID: {flight.id}</Typography>
                <Typography variant='h6'>From: {flight.start_point.name} </Typography>
                <Typography variant='h6'>To: {flight.end_point.name}</Typography>
                <Typography variant='h6'>Aircraft: {flight.aircraft_ref.type}</Typography>
                </Stack>
            </Paper>
        );
    });

    if (flights.length == 0) {
        return <p style={{color: 'red'}}>loading flights...</p>
    }

    return (
        <>
            <h2 style={{color: 'black'}}>Available Flights</h2>
            {displayFlights}
        </>
    );
}

// EXPORTS
//-------------------------------------------------------//
export default BrowseFlights;