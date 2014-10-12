var _ = require('lodash'),
	_blocks = {},
	BlockStore;

BlockStore = function () {};

_.assign(BlockStore.prototype, {
	connectStorage: function () {

	},
	add: function (block) {
		var d;
		
		if ( !block.url ) {
			return; 
		}

		d = Date.now();

		_blocks[d] = _.assign({id: d}, block);

	},
	remove: function (id) {
		console.log('removing');
		console.log(_blocks[id]);
		delete _blocks[id];
		console.log(_blocks[id]);
	},
	printStore: function () {
		console.log(_blocks);
	},
	getBlocks: function () {
		return _.clone(_blocks, true);
	}

});

module.exports = BlockStore;