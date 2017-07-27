const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// Logging
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Connect go mLab db
mongoose.connect('mongodb://dev_user:Graey421@ds147872.mlab.com:47872/activityjar').then(
	() => console.log('mongo connected!')
);

var jarSchema = new mongoose.Schema({
	label: String,
	activities: {} // MixedType
});

var Jar = mongoose.model('Jar', jarSchema);

Jar.findOne({}, (err, jar) => console.log(jar));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

module.exports = app;