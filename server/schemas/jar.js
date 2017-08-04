const mongoose = require('mongoose');

const JarSchema = new mongoose.Schema({
	label: String,
	jar_id: String,
	editable_by: Array,
	viewable_by: Array,
	activities: Object // MixedType
});

module.exports = mongoose.model('Jar', JarSchema);