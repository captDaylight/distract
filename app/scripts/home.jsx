/** @jsx React.DOM */
'use strict'

var React = require('react'),
	Blocked = require('./blocked.jsx'),
	BlockedStore = require('./models/blocked'),
	store;

store = new BlockedStore();

store.add({url:'test.com'});
store.printStore();
setTimeout(function(){
	store.add({url:'test.com.aoeuaeu'});
	store.printStore();
}, 3000);

React.renderComponent(
  <Blocked/>,
  document.getElementById('blocked')
);