var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'assets';
	
	// Load the galleries by sortOrder
	view.query('assets', keystone.list('Assets').model.find().sort('sortOrder'));
	
	console.log(view);
	// Render the view
	view.render('assets');
	
};
