//-------------------------------------------------------//
//  File Name: FlightDeck.jsx
//  Description: Flight Deck main components for seat selection
//
//  Requirements:
//      - TODO.jsx
//
//  Renders:
//      - Renders page
//
// Created By: Corey Yang-Smith
// Date: November 13th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//
// React Import
import React from 'react';

// My Component Import
import Seat from './Seat';
import { Paper, Typography } from '@mui/material';

//  MAIN FUNCTION
//-------------------------------------------------------//
const FlightDeck = (props) => {
	const frostedGlassSX = {
		background: 'rgba(255,255,255,.3)',
		display: 'flex',
		padding: '16px',
		zIndex: '100',
		width: '100px',
		height: '500px',
		marginLeft: '50px',
		marginTop: '50px',
	};

    console.log(props.toObj)
    console.log(props.fromObj)

	return (
		<Paper sx={{ frostedGlassSX }}>
			<h1>Hello! Selected Airports: </h1>
            <h1>From: </h1>
			<p>{props.fromObj.name}</p>
            <h1>To: </h1>
			<p>{props.toObj.name}</p>

			<Seat />
			<Seat />
			<Seat />
			<Seat />
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default FlightDeck;
