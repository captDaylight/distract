/** @jsx React.DOM */

var React = require('react');

var Paultest = React.createClass({
  render: function() {
    return (
		<div className="Bio">
			paul hi test test test
		  	<p className="Bio-text"></p>
		</div>
    )
  }
});	

React.renderComponent(
  <Paultest/>,
  document.body
);