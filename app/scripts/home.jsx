/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="Bio">
      paul hi
          <p className="Bio-text">{this.props.text}</p>
      </div>
    )
  }
});	