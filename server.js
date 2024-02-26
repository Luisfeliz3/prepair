import express  from 'express';
import mongoose from 'mongoose';
import mongoOptions  from "./utils/config.js";
// import  sessionOptions  from "./utils/config.js";
import routes from "./routes/index.js";
const app = express();
import session  from 'express-session' 
// Requiring passport as we've configured it
import passport from "./utils/passport.js";
import logger from "morgan";
import seed from "./utils/seedBaseDB.js";
 

const PORT = process.env.PORT || 3001;

// logging (development)
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from react build
app.use(express.static("client/build"));

// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: "keyboard cat",
  name: "stats",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: 1000 * 60 * 60 * 24,
  },
}));


app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);
mongodb://localhost:27017
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/prepair", {
    useUnifiedTopology: true ,
  useNewUrlParser: true,
});

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
