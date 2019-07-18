const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


//Connection to database
mongoose.connect(config.database, {useNewUrlParser: true});

//On connection
mongoose.connection.on('connected', function() {
    console.log('Connected to database ' + config.database);
});

//On error
mongoose.connection.on('error', function(err) {
    console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');
const services = require('./routes/services');


// Port number
const port = 3000;

//CORS Middleware
app.use(cors());

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/services', services);

//Index route 
app.get('/', function(req, res) {
    res.send('Invalid Endpoint');
});


//Start server
app.listen(port, function() {
    console.log('Server startend on port ' + port);
})
