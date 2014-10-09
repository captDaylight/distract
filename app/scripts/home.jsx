/** @jsx React.DOM */

var React = require('react'),
	BlockedForm,
	BlockedList,
	Blocked;

BlockedForm = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();
		var block = this.refs.block.getDOMNode().value.trim();
	},
	render: function () {
		return (
			<form className="blockedForm" onSubmit={this.handleSubmit}>
				<input type="text" ref="block"/>
			</form>
		);
	}
});

BlockedList = React.createClass({
	render: function () {
		return (
			<div className="blockedList">
				blocked list
			</div>
		);
	}
});

Blocked = React.createClass({
	render: function() {
		return (
			<div className="blocked">
			  	<BlockedForm />
			  	<BlockedList />
			</div>
		)
	}
});

React.renderComponent(
  <Blocked/>,
  document.getElementById('blocked')
);