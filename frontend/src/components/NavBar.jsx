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

// Routing
// import StyledLink from '../../components/StyledLink';
// import StyledHashLink from '../../components/StyledHashLink';
// import StyledHomeHashLink from '../../components/StyledHomeHashLink';

// React Router Import
import { Link } from 'react-router-dom';

// MUI Import
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Grid } from '@mui/material/';

//  STYLES
//-------------------------------------------------------//

const toolbarSX = {
	display: 'flex',
	justifyContent: 'center',
};

//  MAIN FUNCTION
//-------------------------------------------------------//

const NavBar = () => {
	return (
		<AppBar
			color="black"
			position="sticky"
			elevation={0}
            sx={{width: "100vw"}}
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
						xs={3}
						direction="row"
						justifyContent="flex-start"
						alignItems="center"
					>
						<Typography variant="landing_title">FLIGHT.LY</Typography>
					</Grid>

					<Grid
						container
						item
						xs={6}
						direction="row"
						justifyContent="center"
						alignItems="center"
					></Grid>

					<Grid
						container
						item
						xs={3}
						direction="row"
						justifyContent="flex-end"
						alignItems="center"
					>
						{/* <StyledLink to="/login">
							<Typography variant="landing_menu">Login</Typography>
						</StyledLink> */}
						<Typography variant="landing_menu" sx={{paddingRight: "12px"}}>Login</Typography>
						<Button
							variant="contained"
							color="c2a"
						>
							<Typography variant="landing_button">Sign Up</Typography>
							{/* <Link to="/register">
								<Typography variant="landing_button">Sign Up</Typography>
							</Link> */}
						</Button>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default NavBar;
