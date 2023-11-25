//-------------------------------------------------------//
//  File Name: SummarySeatDetails.jsx
//  Description: Seat Details Box for Seat Selection Information
//
//  Requirements:
//      - SeatSelectionForm.jsx
//
//  Renders:
//      - Seat Details
//
// Created By: Corey Yang-Smith
// Date: November 24th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'


//  MAIN FUNCTION
//-------------------------------------------------------//
const SummarySeatDetails = (props) => {

	/**
	 * getSeatName
	 * @param {*} row int: row number
	 * @param {*} col int: column number
	 * @returns 
	 */
	function getSeatName(seat) {
		var seatName = ""
		const col = seat.column_position;
		const row = seat.row_position;

		seatName = (row + 1).toString()
		seatName += String.fromCharCode(97 + col).toUpperCase()

		return seatName
	}

	/**
	 * getSeatType
	 * @param {*} seat Seat : Seat Object
	 * @returns String: Seat Type
	 */
	function getSeatType(seat) {
		if (seat.type == "ORD") return "Ordinary"
		if (seat.type == "CMF") return "Comfort"
		if (seat.type == "BUS") return "Business Class"
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
          Seat Details
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={9}
      >
        <Typography>Location: {getSeatName(props.seat)}</Typography>
        <Typography>Type: {getSeatType(props.seat)}</Typography>
      </Grid>
    </Grid>
  </Paper>
  )
}

//  EXPORTS
//-------------------------------------------------------//
export default SummarySeatDetails