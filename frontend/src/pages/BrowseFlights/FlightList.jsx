import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'

// My Context
import { Context } from '../Landing/Landing'
import FlightCard from './FlightCard'

const FlightList = (props) => {
  const [fromObj, setFromObj, toObj, setToObj, flightList, setFlightList] = useContext(Context);

  const displayFlights = flightList.map((flight, index) => {
    return (
      <FlightCard flight={flight} key={flight.id}/>
    )
  })

    // Once Active!
    if (props.toggle) {
        return (
            <Paper sx={{
              position: "absolute",
              top: "107vh",
              width: "100vw"

            }}>
              <Typography>Flight List</Typography>
              <Stack direction="column" spacing={0.5}>
                {displayFlights}
              </Stack>

            </Paper>
        )
    }

  return (
    <></>
  )
}

export default FlightList