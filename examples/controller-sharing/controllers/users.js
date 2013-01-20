var utils = require('partial.js/utils');

exports.init = function() {
	this.route('/users/', viewUsers);
};

exports.models = {
	users: ['Peter', 'Lucia', 'Zuzana', 'Veronika']
};

exports.functions = {
	exists: function(name) {	
		return exports.models.users.indexOf(name) > -1;
	}
};

function viewUsers() {
	this.plain(JSON.stringify(exports.models.users));
}