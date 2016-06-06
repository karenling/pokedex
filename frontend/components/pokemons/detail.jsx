var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ClientActions = require('../../actions/clientActions');
var ToysIndex = require('../toys/index');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return {
      pokemon: PokemonStore.findById(this.props.params.pokemonId)
    }
  },
  _onChange: function() {
    this.setState({ pokemon: PokemonStore.findById(this.props.params.pokemonId) });
  },
  componentDidMount: function() {
    this.listener = PokemonStore.addListener(this._onChange);
    ClientActions.fetchOnePokemon(this.props.params.pokemonId);
  },
  componentWillUnmount: function() {
    this.listener.remove();
  },
  componentWillReceiveProps: function() {
    ClientActions.fetchOnePokemon(this.props.params.pokemonId);
  },
  render: function() {
    // handle before pokemon is fetched
    if (this.state.pokemon === undefined) {
      return(
        <div></div>
      )
    }
    return(
      <div>
        <div className='pokemon-detail-pane'>
          <div className='detail'>
            <div><img src={ this.state.pokemon.image_url }/></div>
            <p>Name: { this.state.pokemon.name }</p>
            <p>Attack: { this.state.pokemon.attack }</p>
            <p>Defense: { this.state.pokemon.defense }</p>
            <p>Moves: { this.state.pokemon.moves }</p>
            <p>Type: { this.state.pokemon.poke_type }</p>
          </div>
          <ToysIndex toys={ this.state.pokemon.toys }></ToysIndex>
        </div>
        { this.props.children }
      </div>
    )
  }
});

module.exports = PokemonDetail;
