var React = require('react');

var ToyIndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  showDetail: function() {
    this.context.router.push('pokemon/' + this.props.toy.pokemon_id + '/toys/' + this.props.toy.id)
  },
  render: function() {
    return(
      <li className='toy-list-item' onClick={ this.showDetail }>
        <p>name: { this.props.toy.name }</p>
        <p>happiness: { this.props.toy.happiness }</p>
        <p>price: { this.props.toy.price }</p>
      </li>
    )
  }
});

module.exports = ToyIndexItem;
