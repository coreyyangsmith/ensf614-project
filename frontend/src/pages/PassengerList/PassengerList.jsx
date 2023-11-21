import { useFlights } from '../../hooks/useFlights.js';
import React, { useState, useEffect } from 'react';
import { getPassengersByFlight } from '../../api/posts';

import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    Paper,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    CircularProgress,
} from '@mui/material';

const PassengerListPage = () => {
    const { flights } = useFlights(); // use the useFlights hook
    const [selectedFlight, setSelectedFlight] = useState('');
    const [passengers, setPassengers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (selectedFlight) {
            setLoading(true);
            getPassengersByFlight(selectedFlight)
                .then(data => {
                    setPassengers(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error:', error);
                    setError('Error fetching passengers');
                    setLoading(false);
                });
        } else {
            setPassengers([]);
        }
    }, [selectedFlight]);

    // // Fetch the passengers for the selected flight
    // useEffect(() => {
    //     if (selectedFlight) {
    //         axios.get(`${process.env.REACT_APP_API_URL}/api/flights/${selectedFlight}/passengers/`)
    //             .then(response => setPassengers(response.data))
    //             .catch(error => console.error('Error fetching passengers:', error));
    //     } else {
    //         setPassengers([]);
    //     }
    // }, [selectedFlight]);

    console.log(flights)

    const handleFlightChange = (event) => {
        setSelectedFlight(event.target.value);
    };

    return (
        <Container style={{ background: "#000000" }}>
            <Typography variant="h4" gutterBottom>Passenger List</Typography>
            <FormControl fullWidth margin="normal">
                <InputLabel id="select-flight-label">Select Flight</InputLabel>
                <Select
                    labelId="select-flight-label"
                    value={selectedFlight}
                    label="Select Flight"
                    onChange={handleFlightChange}
                >
                    {flights.map((flight) => (
                        <MenuItem key={flight.id} value={flight.id}>
                            {flight.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </div>
            )}
            {error && <Typography color="error">{error}</Typography>}
            {!loading && !error && passengers.length === 0 && (
                <Typography>No passengers found for the selected flight.</Typography>
            )}
            <Paper elevation={3} style={{ marginTop: 16, marginBottom: 16 }}>
                <List>
                    {passengers.map((passenger) => (
                        <ListItem key={passenger.id}>
                            <ListItemText primary={`${passenger.firstName} ${passenger.lastName}`} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container >
    );
};

export default PassengerListPage;