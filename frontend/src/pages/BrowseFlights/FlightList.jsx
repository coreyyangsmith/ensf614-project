import { Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';

// My Context
import { Context } from '../Landing/Landing';
import FlightCard from './FlightCard';
import SeatCard from './SeatCard';

const FlightList = (props) => {
	const [fromObj, setFromObj, toObj, setToObj, flightList, setFlightList] =
		useContext(Context);

	const displayFlights = flightList.map((flight, index) => {
		return (
			<>
				<Grid container sx={{width: "100%"}} direction="row">
          {/* Flight Card */}
          <Grid container item xs={8}>
					<FlightCard
						flight={flight}
						key={flight.id}
					/>
          </Grid>

          {/* Seat Selection */}
          <Grid container item xs={4}>
            <SeatCard 
            flight={flight}
            key={flight.id}/>

          </Grid>
				</Grid>
			</>
		);
	});

	// Once Active!
	if (props.toggle) {
		return (

				<Paper
					sx={{
					top: '100vh',
            
						position: 'relative',
						width: '100%',
					}}
				>
					<Typography>Flight List</Typography>
					<Stack
						direction="column"
						spacing={0.5}
					>
						{displayFlights}
					</Stack>
				</Paper>
		);
	}

	return <></>;
};

export default FlightList;
