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
  <Paultest
    username="Simon"
    bio="My name is Simon. I make websites"
    avatar="http://simonsmith.io/assets/images/me.jpg"
  />,
  document.body
);