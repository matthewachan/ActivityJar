const express = require('express')
const cors = require('cors');
const jwt = require('express-jwt');
const morgan = require('morgan');
const mongoose = require('mongoose');
const hash = require('string-hash');

const Jar = require('./schemas/jar.js');
const User = require('./schemas/user.js');
const user_collection = require('./actions/user_collection.js');


const PORT = 8080;



const app = express();
app.use(cors()); // Add CORs headers
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms')); // Logging

const checkAuth = jwt({
    secret: 'TAbjlWU6QEjfu6KcAAPM4TDyUsdgrCVhcINjuZEwgBsfkcYz0klQ--08g8Y4q-lT',
    audience: 'IoTrTeaOoYnP1SywZ5N4lgofF8f7sMmd'
});


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dev_user:Graey421@ds147872.mlab.com:47872/activityjar', {
    useMongoClient: true
}).then(
    function success() {
        console.log('Connected to mLabs database.')
    },
    function error() {
        console.log('Failed to connect to mLabs database.')
    }
);




// Register new user (POST)
app.get('/users', (req, res) => {
    user_collection.findUsers().then(users => {
        res.json(users);
    });

});
// Get all jars that are either owned, editable, or viewable by a user (GET)
// Look at docs here: https://docs.mongodb.com/manual/tutorial/query-arrays/ 
app.get('/jars', (req, res) => {
    var user_id = req.query.user_id;
    var query = {
        $or: [{
            viewable_by: user_id
        }, {
            editable_by: user_id
        }, {
            owner_id: user_id
        }]
    };
    Jar.find(query, (err, jars) => {
        if (err)
            console.log(err);
        res.json(jars);
    })
});



app.post('/user', (req, res) => {
    var newUser;
    if (req.query.user_id) {
        newUser = user_collection.saveUser(req.query.user_id);
    }
    res.json(newUser);
});


// Add a new jar
app.post('/jar', (req, res) => {
    var newJar;
    if (req.query.label) {
        newJar = new Jar({
            jar_id: hash(req.query.label).toString(),
            label: req.query.label,
            activities: {},
            viewable_by: [],
            editable_by: []
        });
        newJar.save((err, success) => {
            if (err)
                console.log('Failed to add new jar.');
            else
                console.log('Added a new jar successfully.');
        })
    }
    res.json(newJar);
});

// Add a new activity
app.post('/jars/:jar_id', (req, res) => {
    if (req.params.jar_id)
        Jar.findOne({
            jar_id: req.params.jar_id
        }, (err, jar) => {
            if (err)
                console.log('Could not find the jar to update.');
            else {
                var newActivity = {};
                var activity_id = hash(req.query.activity).toString();
                newActivity[activity_id] = {
                    repeat: false,
                    activity: req.query.activity
                };
                jar.activities = Object.assign({}, jar.activities, newActivity);
                jar.save((err, updatedJar) => {
                    if (err)
                        console.log('Failed to update jar.');
                    res.json(jar);
                })

            }
        });
});

// Remove activity
app.put('/jars/:jar_id', (req, res) => {
	if (!req.params.jar_id || !req.query.activity_id)
		return next(new Error('Could not delete activity (id not specified).'));

	Jar.findOne({jar_id: req.params.jar_id}, (err, jar) => {
		if (err)
			return next(err);
		
		delete jar.activities[req.query.activity_id];
		jar.markModified('activities');

		jar.save((err, success) => {
			if (err)
				return next(err);
			else {
				res.json(jar);
			}
		})
		
	});
});

// Remove jar
app.delete('/jars/:jar_id', (req, res) => {
    if (!req.params.jar_id)
        return next(new Error('Could not delete jar (jar id not specified).'));

    Jar.remove({jar_id: req.params.jar_id}, (err) => {
    	if (err)
    		return next(err);
    	console.log('Jar ' + req.params.jar_id + ' removed successfully!');
    })

});

// Toggle repeatable

app.listen(PORT);
console.log('ActivityJar REST API listening on port ' + PORT);

module.exports = app;

// LATER
// Make jar editable by user
// Make jar viewable by user