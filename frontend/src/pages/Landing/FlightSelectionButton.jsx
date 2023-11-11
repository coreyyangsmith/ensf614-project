import { Box, Button } from '@mui/material';
import React from 'react';

const FlightSelectionButton = (props) => {
	return <Box>
		<Button variant="contained" color="black" disabled={props.formFilled ? false : true}>
			Find Flights
		</Button>
	</Box>
};

export default FlightSelectionButton;
