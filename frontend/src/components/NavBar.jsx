//-------------------------------------------------------//
//  File Name: NavBar.jsx
//  Description: Responsive Navigation Bar for Landing Page
//
//  Requirements:
//      - Landing.jsx
//
//  Renders:
//      - Navigation Bar
//
// Created By: Corey Yang-Smith
// Date: November 11th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react';
import { useContext } from 'react';

// Routing
// import StyledLink from '../../components/StyledLink';
// import StyledHashLink from '../../components/StyledHashLink';
// import StyledHomeHashLink from '../../components/StyledHomeHashLink';
import { AuthContext } from '../App';
// React Router Import
import { Link } from 'react-router-dom';

// MUI Import
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Grid } from '@mui/material/';
import NavigationButton from './NavigationButton';


//  STYLES
//-------------------------------------------------------//

const toolbarSX = {
	display: 'flex',
	justifyContent: 'center',
};

//  MAIN FUNCTION
//-------------------------------------------------------//

const NavBar = () => {
	// const { user } = useContext(AuthContext);
	let username = localStorage.getItem('username');
	return (
		<AppBar
			position="sticky"
			elevation={0}
			style={{ background: "black" }}
			sx={{ width: "100vw" }}
		>
			<Toolbar
				variant="regular"
				sx={toolbarSX}
			>
				<Grid
					container
					justifyContent="space-evenly"
					alignItems="stretch"
				>
					<Grid
						container
						item
						xs={5}
						direction="row"
						justifyContent="flex-start"
						alignItems="center"
					>
						<Typography variant="landing_title">FLIGHT.LY</Typography>
						
						
						
					</Grid>

					<Grid
						container
						item
						xs={2}
						direction="row"
						justifyContent="center"
						alignItems="center"
					>{username && <div>Hi, {username}</div>}</Grid>
					
					<Grid
						container
						item
						xs={5}
						direction="row"
						justifyContent="flex-end"
						alignItems="center"
					>
						<NavigationButton label="Master Flight List" path="/flightlist" color="primary" />
						<NavigationButton label="Seat Map Test" path="/seatmap" color="primary" />
						<NavigationButton label="Login" path="/login" color="primary" />
						<NavigationButton label="Signup" path="/register" color="c2a" />
						<NavigationButton label="Passenger List" path="/passenger-list" color="primary" />

					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default NavBar;
