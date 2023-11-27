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
import TitleLineItem from './TitleLineItem';
import DetailLineItem from './DetailLineItem';


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
    <Paper elevation={4} sx={{background: "#161616", borderRadius: "15px"}}>
    <Grid
      container
      direction="column"
    >
      <TitleLineItem title="SEAT DETAILS" />


      <Grid
        container
        item
        xs={9}
		sx={{paddingTop: "8px", marginBottom: "12px"}}
      >
        <DetailLineItem description="LOCATION" value={getSeatName(props.seat)}/>
        <DetailLineItem description="TYPE" value={getSeatType(props.seat)}/>

      </Grid>
    </Grid>
  </Paper>
  )
}

//  EXPORTS
//-------------------------------------------------------//
export default SummarySeatDetails