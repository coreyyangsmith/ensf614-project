//-------------------------------------------------------//
//  File Name: Landing.jsx
//  Description: Main Component for Landing Page
//
//  Requirements:
//      - App.jsx
//
//  Renders:
//      - Landing.jsx and all sub components
//
// Created By: Corey Yang-Smith
// Date: November 11th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react';

// MUI Import
import { Paper } from "@mui/material"

// Component Imports
import NavBar from '../../components/NavBar';
import FlightSelectionMain from './FlightSelectionMain';

//  MAIN FUNCTION
//-------------------------------------------------------//
const Landing = () => {
	return (
		<>
			<NavBar />
            <Paper sx={{height: "1000px", width: "100vw", color: "black"}}>
				<FlightSelectionMain/>

			</Paper>
		</>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default Landing;
