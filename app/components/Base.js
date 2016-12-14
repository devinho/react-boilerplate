var React = require('react');

require('../../styles/base.scss');

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
