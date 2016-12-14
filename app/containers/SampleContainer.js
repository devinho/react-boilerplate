var React = require('react');

require('../../styles/containers/sample-container.scss');

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
