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
import { Paper } from '@mui/material';

// Component Imports
import NavBar from '../../components/NavBar';
import FlightSelectionMain from './FlightSelectionMain';
import CanvasElement from './Globe/CanvasElement';

// Custom Hooks
import { useDestinations } from '../../hooks/useDestinations';

//  MAIN FUNCTION
//-------------------------------------------------------//
const Landing = () => {
	const { destinations } = useDestinations();

	return (
		<>
			<NavBar />
			<Paper
				sx={{
					height: '100vh',
					width: '100vw',
					zIndex: '-1',
					position: 'absolute',
					background: '',
				}}
			/>
			<Paper
				sx={{
					height: '100vh',
					width: '100vw',
					zIndex: '1',
					position: 'absolute',
					background: 'transparent',
				}}
			>
				<FlightSelectionMain destinations={destinations} />
			</Paper>

			<CanvasElement data={destinations} />
		</>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default Landing;
