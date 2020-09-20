const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HS19rF3soLDY7DwYgFMZWI8uitstDehQalZlHJdGdFAoEElRjLUnyg5TySDVmTN2TnafTsmoHXeSHgpRuOBMEca00PRUwjcjO" // I Will Regenerate It Before The Final Deployment
);

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }))
// app.use(
//   cors({
//     origin:
//       "https://us-central1-butikkken.cloudfunctions.net/api/checkout/testTheCloud",
//     // origin: /^https:\/\/us-central1-butikkken\.cloudfunctions\.net\/api.*/,
//   })
// );

app.use(express.json());

// API Routes
app.get("/", (req, res) =>
  res.status(200).send("👋 From The Butikk ☁ Functions")
); // Test Endpoint

app.get("/checkout/testTheCloud", (req, res) => {
  res.status(200).send("👋 From The ☁");
  // res.status(200).send("🚀 The ☁ Is Up And Running");

  console.log("☁ The Cloud Is Up And Running");

  res.status(201).send({ fromTheCloud: "👋 From The ☁ 2️⃣" });
}); // Test Endpoint

app.post("/checkout/create", async (req, res) => {
  res.set(
    "Access-Control-Allow-Origin",
    "https://us-central1-butikkken.cloudfunctions.net/api"
  );

  const total = req.query.total;

  console.log("💰 Payment Request For: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // In SubUnits (Cents)
    currency: "usd",
  });

  // Ok - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// Example EndPoint
// http://localhost:5001/butikkk/us-central1/api
