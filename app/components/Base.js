var React = require('react');

var Base = React.createClass ({
  render: function () {
    return (
      <div className="base">
        { this.props.children }
      </div>
    );
  }
});

module.exports = Base;
