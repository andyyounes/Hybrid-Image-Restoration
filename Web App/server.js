const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public')); // Serve static files from the 'public' folder

app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    const isPremium = req.body.premium === 'true';

    // Simulate payment processing (replace this with your actual payment processing logic)
    const paymentSuccessful = simulatePayment(email);

    if (paymentSuccessful) {
        if (isPremium) {
            res.send('Payment successful! Premium subscribed successfully! You will receive updates on new image restoration algorithms.');
        } else {
            res.send('Payment successful! Subscribed successfully! You will receive general updates.');
        }
    } else {
        res.status(500).send('Payment failed. Please try again.');
    }
});

function simulatePayment(email) {
    // Simulate payment processing logic (replace this with your actual payment processing logic)
    // For simplicity, we assume all payments are successful.
    console.log(`Payment processed for ${email}`);
    return true;
}

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


