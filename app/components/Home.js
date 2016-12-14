var React = require('react');

var Home = React.createClass ({
  render: function () {
    return (
      <div className="home container">
        <h1>This is Home</h1>
        <button className="btn btn-primary">button</button>
      </div>
    );
  }
});

module.exports = Home;
