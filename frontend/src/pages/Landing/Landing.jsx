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
import React, { useState } from 'react';

// MUI Import
import { Paper } from '@mui/material';

// Component Imports
import NavBar from '../../components/NavBar';
import FlightSelectionMain from './FlightSelectionMain';
import CanvasElement from './Globe/CanvasElement';

// Custom Hooks
import { useDestinations } from '../../hooks/useDestinations';
import { fromPixels } from '@tensorflow/tfjs-core/dist/ops/browser';
import FlightList from '../BrowseFlights/FlightList';

//  MAIN FUNCTION
//-------------------------------------------------------//

export const Context = React.createContext();

const Landing = () => {
	const { destinations } = useDestinations();

	const [toggle, setToggle] = useState(false);

	const [fromObj, setFromObj] = useState([]);
	const [toObj, setToObj] = useState([]);
	const [flightList, setFlightList] = useState([]);

	return (
		<Context.Provider
			value={[fromObj, setFromObj, toObj, setToObj, flightList, setFlightList]}
		>
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
						zIndex: `${toggle ? -2 : 1}`,
						position: 'absolute',
						background: 'transparent',
					}}
				>
					<FlightSelectionMain
						destinations={destinations}
						setToggle={setToggle}
						toggle={toggle}
					/>
				</Paper>

				<Paper>
					<CanvasElement
						data={destinations}
						toggle={toggle}
					/>
				</Paper>


			<FlightList toggle={toggle} />
		</Context.Provider>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default Landing;
