import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    const [flights, setFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState('');
    const [passengers, setPassengers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch the list of flights
    useEffect(() => {
        setLoading(true);
        axios.get('/api/flights')
            .then(response => {
                setFlights(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching flights:', error);
                setError('Error fetching flights');
                setLoading(false);
            });
    }, []);

    // Fetch the passengers for the selected flight
    useEffect(() => {
        if (selectedFlight) {
            axios.get(`${process.env.REACT_APP_API_URL}/api/flights/${selectedFlight}/passengers/`)
                .then(response => setPassengers(response.data))
                .catch(error => console.error('Error fetching passengers:', error));
        } else {
            setPassengers([]);
        }
    }, [selectedFlight]);

    const handleFlightChange = (event) => {
        setSelectedFlight(event.target.value);
    };

    return (
        <Container>
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
        </Container>
    );
};

export default PassengerListPage;
