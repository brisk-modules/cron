var _ = require("underscore"),
	async = require("async"),
	schedule = require("node-schedule"),
	// main class
	Main = require("brisk").getClass("main");

var helper = Main.extend({

	init: function( site ){

		this.site = site;

		// schedule intervals
		var minutely = new schedule.RecurrenceRule();
		minutely.second = Math.round( Math.random() * 60 ); // every minute ( random second )
		var hourly = new schedule.RecurrenceRule();
		hourly.second = Math.round( Math.random() * 60 ); // random second
		hourly.minute = Math.round( Math.random() * 60 ); // every hour ( random minute )
		var daily = new schedule.RecurrenceRule();
		daily.second = Math.round( Math.random() * 60 ); // random second
		daily.minute = Math.round( Math.random() * 60 ); // random minute
		daily.hour = Math.round( Math.random() * 24 ); // every day ( random hour )

		// tasks
		this.cron = {
			minutely: schedule.scheduleJob(minutely, _.bind(this.minutely, this) ),
			minutely: schedule.scheduleJob(hourly, _.bind(this.hourly, this) ),
			daily: schedule.scheduleJob(daily, _.bind(this.daily, this) )
		};

		// setup
		this.setup();
	},

	// extend with your own actions
	setup: function(){

	},

	// deprecate?
	self: function(){
		//return this;
	},

	// minutely queue
	minutely: function(req, res, cb){

		var self = this;

		var actions = [
		];

		// execute
		async.series( actions, function(err, results ){
			//console.log( "minutely done", err );
			if( cb instanceof Function ) cb();
		});

	},

	// hourly queue
	hourly: function(req, res, cb){

		var self = this;

		var actions = [
		];

		// execute
		async.series( actions, function(err, results ){
			//console.log( "minutely done", err );
			if( cb instanceof Function ) cb();
		});

	},

	// daily queue
	daily: function(req, res, cb){

		var self = this;

		var actions = [
		];

		// execute
		async.series( actions, function(err, results ){
			//console.log( "minutely done", err );
			if( cb instanceof Function ) cb();
		});

	}

});


module.exports = helper;
