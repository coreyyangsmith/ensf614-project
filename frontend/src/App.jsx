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
				<Landing />
			</ThemeProvider>
		</>
	);
}

//  EXPORTS
//-------------------------------------------------------//
export default App;
