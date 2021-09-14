const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')
const stripe = require("stripe")("sk_test_51JAqaMSIAS2FXB7JQkacYHKIt3aLXdHN7L8LWmpwRePZHkFKYt2wkFXkfH3zJ3URxTny9MxgVQ96Gm98Crm3guz300VmlM9dgx")

//APIs

//  App config
const app = express();

//  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request,response) => response.status(200).send('hello World'))

app.post('/payments/create', async(request,response)=>{
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>>',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,   //subunits of the currency
        currency: "inr",
    })

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen command
exports.api = functions.https.onRequest(app)



//example api endpoint
// (http://localhost:5001/challenge-3b99a/us-central1/api