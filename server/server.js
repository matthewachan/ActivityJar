const express = require('express')
const cors = require('cors');
const jwt = require('express-jwt');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Jar = require('./schemas/jar.js');
const User = require('./schemas/user.js');
const db = require('./actions/index.js');


const PORT = 7000;



const app = express();
app.use(cors()); // Add CORs headers
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms')); // Logging

const checkAuth = jwt({
  secret: 'TAbjlWU6QEjfu6KcAAPM4TDyUsdgrCVhcINjuZEwgBsfkcYz0klQ--08g8Y4q-lT',
  audience: 'IoTrTeaOoYnP1SywZ5N4lgofF8f7sMmd'
});

mongoose.connect('mongodb://dev_user:Graey421@ds147872.mlab.com:47872/activityjar').then(
	function success() { console.log('Connected to mLabs database.') }, 
	function error() { console.log('Failed to connect to mLabs database.') }
);





app.get('/', (req, res) => {
	db.findUsers().then(users => {
		res.json(users);
	});
	
});

app.post('/', (req, res) => {
	var newUser;
	if (req.query.user_id) {
		newUser = db.saveUser(req.query.user_id);
	}
	res.json(newUser);
});




app.listen(PORT);
console.log('ActivityJar REST API listening on port ' + PORT);

module.exports = app;



// Register new user (POST)
// Get all jars that are either owned, editable, or viewable by a user (GET)
// Add a new jar
// Add a new activity



// LATER
// Make jar editable by user
// Make jar viewable by user