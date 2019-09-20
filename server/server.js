const express = require('express');
const morgan = require('morgan')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const passport = require('./passport');
const app = express()
const mongoose = require('mongoose')

mongoose.Promise = global.Promise


const PORT = process.env.PORT || 5000 

// Route requires


// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	express.urlencoded({
		extended: false
	})
);

app.use(express.json());


// For Deployment
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactProject";


// Connect to the Mongo DB (Local)
var dbConnection = mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// ==================== Passport ==========================
// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

 

// Use Routes
const auth = require('./routes/api/user.js');
const test = require('./routes/api/test.js');

app.use('/user', auth)
app.use('/test', test)




// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});
