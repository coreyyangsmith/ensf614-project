import { useFlights } from '../hooks/useFlights.js'

// MAIN FUNCTION
//-------------------------------------------------------//
function BrowseFlights() {
    const { flights } = useFlights();

    const displayFlights = flights.map((flight, index) => {
        return (
            <li key={flight.id}>
                Flight {flight.number} to {flight.destination} -
                Departure: {flight.departureTime} |
                Status: {flight.status}
            </li>
        );
    });

    return (
        <>
            <h2>Available Flights</h2>
            <ul>{displayFlights}</ul>
        </>
    );
}

// EXPORTS
//-------------------------------------------------------//
export default BrowseFlights;