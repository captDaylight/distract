/** @jsx React.DOM */
'use strict'

var React = require('react'),
	Blocked = require('./blocked.jsx'),
	BlockedCollection = require('./models/blockedCollection'),
	blockedCollection;

blockedCollection = new BlockedCollection();
console.log(blockedCollection);
React.renderComponent(
  <Blocked/>,
  document.getElementById('blocked')
);