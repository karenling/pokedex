var React = require('react');

var PokemonIndexItem = React.createClass({
  render: function() {
    return(
      <div className='poke-list-item'>
        <p>Name: { this.props.pokemon.name }</p>
        <p>Poke Type: { this.props.pokemon.poke_type }</p>
      </div>
    )
  }
})

module.exports = PokemonIndexItem;
