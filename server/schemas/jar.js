const mongoose = require('mongoose');

const JarSchema = new mongoose.Schema({
	label: String,
	activities: {} // MixedType
});

module.exports = mongoose.model('Jar', JarSchema);