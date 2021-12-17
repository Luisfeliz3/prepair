const express = require("express");
const mongoose = require("mongoose");
const { mongoOptions, sessionOptions } = require("./utils/config");
const routes = require("./routes");
const app = express();
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./utils/passport");
const logger = require("morgan");
const seed = require("./utils/seedBaseDB");

const PORT = process.env.PORT || 3001;

// logging (development)
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from react build
app.use(express.static("client/build"));

// We need to use sessions to keep track of our user's login status
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/prepair", mongoOptions);
// mongoose.createConnection(`mongodb+srv://user1:password1234@cluster0.k6ma6.mongodb.net/prepair?retryWrites=true&w=majority`, mongoOptions);

mongoose.connection.on('connected', ()=>{
  if (process.env.NODE_ENV === 'production') seed.seed();
  console.log('Mongoose is connected !')
})



if (process.env.NODE_ENV === 'production' ){

  app.use(express.static('client/build'));
}
// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
