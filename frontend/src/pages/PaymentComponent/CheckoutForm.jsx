import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Container, Typography, Button, Grid, Box, TextField } from '@mui/material';
import { styled, useTheme } from '@mui/system';

const StyledCardElementContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(2),
    '& .StripeElement': {
        width: '100%',
        padding: '30px',
    },
}));

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const theme = useTheme();

    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                color: theme.palette.text.primary,
                fontSize: '16px',
                '::placeholder': {
                    color: theme.palette.text.disabled,
                },
            },
            invalid: {
                color: theme.palette.error.main,
            },
        },
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            // Process the paymentMethod.id on your server
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Payment Form
            </Typography>
            <StyledCardElementContainer>
                <CardElement options={CARD_ELEMENT_OPTIONS} />
            </StyledCardElementContainer>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button variant="outlined" fullWidth>
                        Back
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth disabled={!stripe}>
                        Pay
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CheckoutForm;
