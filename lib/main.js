var _ = require("underscore"),
	queue = require("bodacious"),
	// parent class
	Module = require("brisk").getHelper("module");

var defaults = require("../config/default");

var Main = Module.extend({
	dir : __dirname,

	// override with config file...
	config : function( options ){

		// get custom config
		options = options || {};

		return _.extend({}, defaults, {

		}, options);

	},

	queue: queue

});


module.exports = new Main();
