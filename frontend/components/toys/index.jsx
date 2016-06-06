var React = require('react');
var ToyIndexItem = require('../toys/indexItem');

var ToysIndex = React.createClass({
  render: function() {
    return(
      <ul>
        { this.props.toys && this.props.toys.map(function(toy, idx) {
          return <ToyIndexItem key={ idx } toy={ toy }></ToyIndexItem>
        }) }
      </ul>
    )
  }
})

module.exports = ToysIndex;
