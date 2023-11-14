import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StripeProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

const stripePromise = loadStripe('pk_test_51OC8jgCQlBoyLNaWHKEXgvdaYgzAviXr6hWXuS1W4ABUyFLPU1rGZ0PLFIV5fTGqGuLDSzxIsDMb4VLMKTey2SM600RX3nqvf1');

function PaymentApp() {
    return (
        <StripeProvider stripe={stripePromise}>
            <MyStore />
        </StripeProvider>
    );
}