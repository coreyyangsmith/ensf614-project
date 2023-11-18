//-------------------------------------------------------//
//  File Name: FlightDeck.jsx
//  Description: Flight Deck main components for seat selection
//
//  Requirements:
//      - TODO.jsx
//
//  Renders:
//      - Renders page
//
// Created By: Corey Yang-Smith
// Date: November 13th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//
// React Import
import React from 'react';

// My Component Import
import Seat from './Seat';
import { useAircrafts } from '../../hooks/useAircrafts.js';
import { useSeats } from '../../hooks/useSeats.js';

// MUI Imports
import { Grid, Paper, Typography } from '@mui/material';
import Aisle from './Aisle.jsx';

//  MAIN FUNCTION
//-------------------------------------------------------//
const FlightDeck = () => {
	const frostedGlassSX = {
		background: 'rgba(255,255,255,.3)',
		display: 'flex',
		padding: '16px',
		zIndex: '100',
		width: '100px',
		height: '500px',
		marginLeft: '50px',
		marginTop: '50px',
	};

	// Given Plane, get needed properties
	// Data Preprocessing
	const { aircrafts } = useAircrafts();
	const myAircraft = aircrafts[1];
	console.log('Selected Aircraft');
	console.log(myAircraft);

	const { seats } = useSeats();
	const mySeats = [];

	seats.filter((el) => {
		if (el.aircraft_ref == myAircraft.id) mySeats.push(el);
	});

	var maxCols = 0;
	var maxRows = 0;

	mySeats.forEach((seat) => {
		if (seat.row_position + 1 > maxRows) maxRows = seat.row_position + 1;
		if (seat.column_position + 1 > maxCols) maxCols = seat.column_position + 1;
	});
	console.log('Generate for the Following Seats'); // 0-indexed
	console.log('# Cols: ', maxCols);
	console.log('# Rows: ', maxRows);

	if (myAircraft != undefined) var columnLayout = myAircraft.seat_columns;

	/**
	 * generateColumnLayout
	 * @param {*} columnLayout String: airplane column layout defined as eg. "3-3-3"
	 * @returns 1-D Array of Column Layout, populated with "1" for Seat
	 */
	function generateColumnLayout(columnLayout) {
		const numbers = columnLayout.split('-');
		const columnsWidth = numbers.reduce(
			(acc, num) => acc + parseInt(num, 10),
			0
		);

		const colArray = [];

		for (var i = 0; i < columnsWidth; i++) {
			colArray.push(1);
		}

		return colArray;
	}

	/**
	 * generateSeatMap
	 * @param {*} mySeats Objects: Array of all seats assigned to the selected airCraft
	 * @param {*} maxRows Int: max number of rows to generate
	 * @param {*} columnLayout String: airplane column layout defined as eg. "3-3-3"
	 * @returns 2-D Array of Seats, populated with "1" for Seat, and "0" for Aisle
	 */
	function generateSeatMap(maxRows, columnLayout) {
		var seatMap = [];

		for (var row = 0; row < maxRows; row++) {
			seatMap.push(generateColumnLayout(columnLayout));
		}

		return seatMap;
	}

	function mapSeatsToSeatMap(seats, seatMap) {
		seats.forEach((seat) => {
			if (
				seat.hasOwnProperty('row_position') &&
				seat.hasOwnProperty('column_position')
			) {
				if (
					seat.row_position >= 0 &&
					seat.row_position < seatMap.length &&
					seat.column_position >= 0 &&
					seat.column_position < seatMap[seat.row_position].length
				) {
					if (seatMap[seat.row_position][seat.column_position] == 1)
						seatMap[seat.row_position][seat.column_position] = seat;
				} else {
					console.warn('Seat position is outside of SeatMap Bounds: ', seat);
				}
			} else {
				console.warn(
					'Seat does not have valid row and column positions: ',
					seat
				);
			}
		});

		return seatMap;
	}

    /**
     * addAislesToSeatMap
     * @param {*} seatMap 2D Array: Mapped Aircraft Seats
     * @param {*} columnLayout String:
     * @returns 2D Array: Contains Seat Objects and "0" (Placeholders) for Aisle
     */
	function addAislesToSeatMap(seatMap, columnLayout) {
		const seatLayout = columnLayout.split('-');

		const newSeatMap = [];
		const numRows = seatMap.length;

		console.log(numRows);

		for (var i = 0; i < numRows; i++) {
			var relCol = 0;
			var colArray = [];

			// Entire Rows
			for (var j = 0; j < seatLayout.length; j++) {
				// Seat Sections (+ Aisle)
				for (var k = 0; k < seatLayout[j]; k++) {
					colArray.push(seatMap[i][relCol]);
					relCol++;
				}
				if (j != seatLayout.length - 1) colArray.push(0);
			}

			newSeatMap.push(colArray);
		}
		console.log('new seat map');

		return newSeatMap;
	}

	var seatMap = [];
	if (columnLayout != undefined) {
		seatMap = generateSeatMap(maxRows, columnLayout);
		seatMap = mapSeatsToSeatMap(mySeats, seatMap);
		seatMap = addAislesToSeatMap(seatMap, columnLayout);
	}

	const populateSeats = seatMap.map((rows) => {
		return (
			<Grid container>
				{rows.map((seat) => {
					if (seat != 0) return <Seat seat={seat}/>;
					if (seat == 0) return <Aisle />;
				})}
			</Grid>
		);
	});

	console.log(seatMap);

	if (seatMap.length > 0) {
		return (
			<Paper sx={{ frostedGlassSX }}>
                {populateSeats}
			</Paper>
		);
	} else {
		return <p>loading...</p>;
	}
};

//  EXPORTS
//-------------------------------------------------------//
export default FlightDeck;
