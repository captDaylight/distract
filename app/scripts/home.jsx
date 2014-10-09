/** @jsx React.DOM */

var React = require('react'),
	BlockedList,
	BlockedForm,
	Blocked;


BlockedList = React.createClass({
	render: function () {
		return (
			<div className="blockedList">
				blocked list
			</div>
		);
	}
});

BlockedForm = React.createClass({
	render: function () {
		return (
			<form class="blockedForm">
				<input type="text">
			</form>
		);
	}
});

Blocked = React.createClass({
	render: function() {
		return (
			<div className="blocked">
				
			  	blocked
			  	<BlockedList />
			</div>
		)
	}
});

React.renderComponent(
  <Blocked/>,
  document.getElementById('blocked')
);