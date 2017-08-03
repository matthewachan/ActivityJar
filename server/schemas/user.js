const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	user_id: String
});

module.exports = mongoose.model('User', UserSchema)