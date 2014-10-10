/** @jsx React.DOM */

var React = require('react'),
	BlockedForm,
	BlockedList,
	Blocked;

var testData = [{url:'test.com'},{url:'another.test.com'}];	

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

		var blockedNodes = this.props.data.map(function (block) {
			return (
				<BlockedItem url={block.url}></BlockedItem>
			);
		});
			
		return (
			<ul className="blockedList">
				{blockedNodes}
			</ul>
		);
	}
});

BlockedItem = React.createClass({
	removeSite: function () {
		console.log('removeSite');
	},
	render: function () {
		console.log(this.props);
		return (
			<li>
				<div className="blocked-site">{this.props.url}</div>
				<div className="cancel" onClick={this.removeSite}>X</div>
			</li>
		);
	}
});

Blocked = React.createClass({
	render: function() {
		
		return (
			<div className="blocked">
			  	<BlockedForm />
			  	<BlockedList data={this.props.data}/>
			</div>
		)
	}
});

React.renderComponent(
  <Blocked data={testData}/>,
  document.getElementById('blocked')
);