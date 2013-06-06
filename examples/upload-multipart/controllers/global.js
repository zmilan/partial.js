var utils = require('partial.js/utils');

exports.install = function(framework) {
	framework.route('/', viewHomepage);

	// the number is maximum data receive
	framework.route('/', viewHomepage, ['upload'], 1024 * 20);
};

function viewHomepage() {
	var self = this;	
	self.repository.title = 'File upload';

	var model = { info: '...' };

	if (self.files.length > 0)
		model.info = self.files[0].filename + ' ({0} kB)'.format(Math.floor(self.files[0].size / 1024, 2));
	
	self.view('homepage', model);
}