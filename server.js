const express = require("express");
const passport = require("./config/passport-setup");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express(); 
const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Set up static directory for images
app.use(express.static("client/src/imgs"));

// session stuff
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/power", { useNewUrlParser: true });

// Add routes, both API and user
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
