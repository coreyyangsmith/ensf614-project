//-------------------------------------------------------//
//  File Name: CancelFlightView.jsx
//  Description: Main Component for Cancel Flight
//
//  Requirements:
//      - App.jsx
//
//  Renders:
//      - Seat Selection Main Component
//
// Created By: Corey Yang-Smith
// Date: November 29th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useState } from 'react';

// MUI Imports
import { Button, Grid, TextField, Typography } from '@mui/material';

// My Components

// React Router Dom Import
import { Link } from 'react-router-dom';

//  MAIN FUNCTION
//-------------------------------------------------------//
const CancelFlightView = () => {
	const [flightId, setFlightId] = useState("")

	const handleSubmit = () => {
		console.log(flightId)
	}



	return (
		<Grid
			container
			direction="row"
			sx={{ background: '#121212', padding: '2%' }}
		>
			<Grid
				container
				item
				xs={2}
			>
				<Button
					variant="outlined"
					sx={{ height: '50px' }}
				>
					<Link
						to="/"
						style={{ textDecoration: 'none' }}
					>
						<Typography color="primary">Return</Typography>
					</Link>
				</Button>
			</Grid>
			<Grid
				container
				item
				xs={3}
				sx={{ direction: 'flex', justifyContent: 'center' }}
			>
				<Typography>Enter Ticket ID</Typography>
			</Grid>

			<Grid
				container
				item
				xs={3}
				sx={{ direction: 'flex', justifyContent: 'center' }}
			>
				<TextField value={flightId} onChange={((e) => setFlightId(e.target.value))}></TextField>
			</Grid>

			<Grid
				container
				item
				xs={9}
			/>
			<Button variant="outlined" onClick={() => handleSubmit()}>Cancel Flight</Button>
		</Grid>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default CancelFlightView;
