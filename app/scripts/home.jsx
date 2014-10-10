/** @jsx React.DOM */

var React = require('react'),
	Blocked = require('blocked');

React.renderComponent(
  <Blocked/>,
  document.getElementById('blocked')
);