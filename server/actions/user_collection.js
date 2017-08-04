const User = require('../schemas/user.js');

/**
 * Search for a user in the MongoDB collection
 * @param  {object} schema Object of conditions to filter results on 
 * @return {object} JSON object containing query results
 */
function findUsers(schema) {
	if (schema === undefined)
		schema = {};

	return User.find(schema, (err, users) => {
		if (err)
			console.log(err);
		return users;
	});
}

/**
 * Save a user document in the MongoDB collection
 * @param  {string} user_id Unique user ID to be stored in the database
 * @return {object} JSON object containing the new user to be added
 */
function saveUser(user_id) {
	var newUser = new User({ user_id: user_id });
	newUser.save( (err, success) => {
		if (err)
			console.log('Failed to save new user.');
		else
			console.log('New user successfully saved!');
	});
	return newUser;
}

module.exports = {
	findUsers: findUsers,
	saveUser: saveUser
}