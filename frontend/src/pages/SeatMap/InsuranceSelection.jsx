//-------------------------------------------------------//
//  File Name: InsuranceSelection.jsx
//  Description: Insurance Selection for Seat
//
//  Requirements:
//      - SeatSelectionForm.jsx
//
//  Renders:
//      - Seat Selection Insurance Details
//
// Created By: Corey Yang-Smith
// Date: November 24th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import { Checkbox, FormControlLabel, FormGroup, Grid, Paper, Typography } from '@mui/material'
import React from 'react'


//  MAIN FUNCTION
//-------------------------------------------------------//
const InsuranceSelection = (props) => {

  const handleChange = (event) => {
    props.setInsurance(event.target.checked)
  }
  return (
		<Paper elevation={2}>
			<Grid
				container
				direction="column"
			>
				<Grid
					container
					item
					xs={3}
          sx={{border:"1px solid white"}}
				>
					<Typography sx={{ display: 'flex', justifyContent: 'center' }}>
						Flight Insurance
					</Typography>
				</Grid>

				<Grid
					container
					item
					xs={9}
				>
          <FormGroup sx={{paddingLeft:"8px"}}>
          <FormControlLabel control={<Checkbox onChange={handleChange} checked={props.insurance} />} label="Flight Insurance"/>

          </FormGroup>

				</Grid>
			</Grid>
		</Paper>
  )
}

//  EXPORTS
//-------------------------------------------------------//
export default InsuranceSelection