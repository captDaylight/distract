/** @jsx React.DOM */
'use strict'

var React = require('react'),
	Blocked = require('./blocked.jsx'),
	BlockedStore = require('./models/blocked'),
	store;

store = new BlockedStore();

console.log(store);

React.renderComponent(
  <Blocked/>,
  document.getElementById('blocked')
);