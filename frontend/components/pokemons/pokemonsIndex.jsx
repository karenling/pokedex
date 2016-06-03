var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ClientActions = require('../../actions/clientActions');
var PokemonIndexItem = require('./PokemonIndexItem');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return {
      pokemons: PokemonStore.all()
    };
  },
  _onChange: function() {
    this.setState({
      pokemons: PokemonStore.all()
    });
  },
  componentDidMount: function() {
    PokemonStore.addListener(this._onChange)
    ClientActions.fetchAllPokemons();
  },
  componentWillUnmount: function() {
    PokemonStore.remove(this._onChange);
  },
  render: function() {
    return(
      <ul>
        { this.state.pokemons.map(function(pokemon, idx) {
          return <PokemonIndexItem key={ idx } pokemon={ pokemon }></PokemonIndexItem>
        })}
      </ul>
    )
  }
});

module.exports = PokemonsIndex;
