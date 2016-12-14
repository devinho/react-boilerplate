var React = require('react');

var SampleContainer = React.createClass ({
  render: function () {
    return (
      <div className="sample">
        <h1>{ this.props.route.header }</h1>
      </div>
    );
  }
});

module.exports = SampleContainer;
