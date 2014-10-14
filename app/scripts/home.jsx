/** @jsx React.DOM */
'use strict'

var React = require('react'),
	Blocked = require('./blocked.jsx'),
	BlockedStore = require('./models/blocked'),
	store;

console.log(chrome.storage.sync.get('distract', function () {console.log('test');}));

store = new BlockedStore();
store.add({url: 'test.com'});


React.renderComponent(
  <Blocked store={store}/>,
  document.getElementById('blocked')
);