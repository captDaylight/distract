/** @jsx React.DOM */

var React = require('react'),
	_ = require('lodash'),
	BlockedForm,
	BlockedList,
	Blocked;


BlockedForm = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();
		var block = this.refs.block.getDOMNode().value.trim();

		if (!block) {
			return;
		}

		this.props.onBlockSubmit({url: block});
		this.refs.block.getDOMNode().value = '';
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
		
		var blockedNodes = [];

		_.forEach(this.props.data, function (block) {
			blockedNodes.push(
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
		// TODO remove blocked site
		console.log('removeSite');
	},
	render: function () {
		return (
			<li>
				<div className="blocked-site">{this.props.url}</div>
				<div className="cancel" onClick={this.removeSite}>X</div>
			</li>
		);
	}
});

Blocked = React.createClass({
	getInitialState: function () {
		return {data: []};
	},
	componentDidMount: function () {
		this.setState({data: this.props.store.getBlocks()});
	},
	handleBlockSubmit: function (data) {
		this.props.store.add(data);
		this.componentDidMount();
	},
	handleBlockRemove: function (data) {

	},
	render: function() {		
		return (
			<div className="blocked">
			  	<BlockedForm onBlockSubmit={this.handleBlockSubmit}/>
			  	<BlockedList data={this.state.data} onBlockRemove={this.handleBlockRemove}/>
			</div>
		)
	}
});

module.exports = Blocked;