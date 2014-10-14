var _ = require('lodash'),
	_blocks = {},
	BlockStore;

BlockStore = function ( attrs ) {
	if ( typeof arguments[0] !== 'undefined' ) { 
		this.initStore(attrs);
	}
};

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
	getBlocks: function () {
		return _.clone(_blocks, true);
	},
	initStore: function (attrs) {
		console.log('initStore');
		_blocks = attrs;
	}
});

module.exports = BlockStore;