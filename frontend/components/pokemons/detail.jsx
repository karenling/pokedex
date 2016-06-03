var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ClientActions = require('../../actions/clientActions');

var PokemonDetail = React.createClass({
  getStateFromStore: function() {
    return {
      pokemon: PokemonStore.findById(this.props.params.pokemonId)
    }
  },
  getInitialState: function() {
    return this.getStateFromStore();
  },
  _onChange: function() {
    this.setState(this.getStateFromStore());
  },
  componentDidMount: function() {
    PokemonStore.addListener(this._onChange);
    ClientActions.fetchOnePokemon(this.props.params.pokemonId);
  },
  componentWillUnmount: function() {
    PokemonStore.removeListener(this._onChange);
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
        </div>

      </div>
    )
  }
});

module.exports = PokemonDetail;
