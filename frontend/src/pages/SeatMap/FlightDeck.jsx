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
import { Paper } from '@mui/material';

//  MAIN FUNCTION
//-------------------------------------------------------//
const FlightDeck = () => {

    const frostedGlassSX = {
        background: 'rgba(255,255,255,.3)',
        display: 'flex',
        padding: '16px',
        zIndex: '100',
        width: '100px',
        height: '100px',
        marginLeft: '50px',
        marginTop: '50px',
    };

	return (
		<Paper sx={{frostedGlassSX}}>
			<Seat available={true}/>
            <Seat available={false}/>
            <Seat available={true}/>
            <Seat available={true}/>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default FlightDeck;
