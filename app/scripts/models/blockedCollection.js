var _ = require('lodash'),
 	Backbone = require('backbone'),
	BlockedModel = require('./blocked'),
	BlockedCollection;

BlockedCollection = Backbone.Collection.extend({
	initialize: function () {
		console.log('hi there');
	}
});

module.exports = BlockedCollection;