import {
	Card,
	CardActionArea,
	CardContent,
	Collapse,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import { useFlights } from '../../hooks/useFlights.js';
import { useState } from 'react';
import BrowseFlightsCard from './BrowseFlightsCard.jsx';

// STYLES
//-------------------------------------------------------//

const paperSX = {
	display: 'flex',
	background: 'white',
	paddingLeft: '8px',
	paddingRight: '8px',
	paddingTop: '4px',
	paddingBottom: '4px',
	boxShadow: 3,
	border: '2px solid black',
	'&:hover': {
		boxShadow: 8,
	},
};

const textSX = {
	color: '#000000',
	fontWeight: 'light',
};

// MAIN FUNCTION
//-------------------------------------------------------//

function BrowseFlights() {
	const { flights } = useFlights();

    const [expandedId, setExpandedId] = useState(-1);

    const handleExpandClick = (i) => {
        
        setExpandedId(expandedId === i ? -1 : i);
        console.log(expandedId)
    }



	const displayFlights = flights.map((flight, index) => {

		return (
            <BrowseFlightsCard flight={flight} key={flight.id}/>
		);
	});

	if (flights.length == 0) {
		return <p style={{ color: 'red' }}>loading flights...</p>;
	}

	return (
		<>
			<h2 style={{ color: 'black' }}>Available Flights</h2>
			<Stack
				direction="column"
				spacing={1}
			>
				{displayFlights}
			</Stack>
		</>
	);
}

// EXPORTS
//-------------------------------------------------------//
export default BrowseFlights;
