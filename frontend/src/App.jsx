//-------------------------------------------------------//
//  File Name: App.jsx
//  Description: Main Component for React Frontend
//
//  Requirements:
//      - None
//
//  Renders:
//      - App.jsx and all sub components
//
// Created By: Corey Yang-Smith
// Date: November 11th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// MUI Imports
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Component Imports
import Landing from './pages/Landing/Landing.jsx';
import Login from './pages/Login/Login.jsx';
import FlightDeck from './pages/SeatMap/FlightDeck.jsx';
import { Route, Routes } from 'react-router-dom';
import BrowseFlights from './pages/BrowseFlights/BrowseFlights.jsx';
import PaymentPage from './pages/PaymentComponent/PaymentPage.jsx';
import PassengerListPage from './pages/PassengerList/PassengerList.jsx';

//  MAIN FUNCTION
//-------------------------------------------------------//

// Theme Definition
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ffa000',
		},
		secondary: {
			main: '#40c4ff',
		},
		background: {
			default: '#FFFFFF',
		},
		black: {
			default: '#000000',
		},
		c2a: {
			main: '#FFFFFF',
		},
	},

	typography: {
		button: {
			textTransform: 'none',
		},
		fontFamily: [
			'Plus Jakarta Sans',
			'inter',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		landing_menu: {
			lineHeight: 1.6,
			fontSize: 16,
			fontWeight: 500,
			fontFamily: 'Plus Jakarta Sans',
			color: 'white',
		},
		landing_button: {
			lineHeight: 1.6,
			fontSize: 16,
			fontWeight: 500,
			fontFamily: 'Plus Jakarta Sans',
			color: '#000000',
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Routes>
					<Route
						path=""
						element={<Landing />}
					/>
					<Route
						path="/seatmap"
						element={<FlightDeck />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/flightlist"
						element={<BrowseFlights />}
					/>
					<Route
						path="/payment"
						element={<PaymentPage />}
					/>
					<Route
						path="/passenger-list"
						element={<PassengerListPage />}
					/>
					<Route
						path="/flights/:id"
						element={<FlightDeck/>}
					/>					
				</Routes>
			</ThemeProvider>
		</>
	);
}

//  EXPORTS
//-------------------------------------------------------//
export default App;

