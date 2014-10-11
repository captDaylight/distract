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
		delete _blocks[id];
	},
	printStore: function () {
		console.log(_blocks);
	}
});

module.exports = BlockStore;