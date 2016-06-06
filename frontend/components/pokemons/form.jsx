var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ClientActions = require('../../actions/clientActions');

var PokemonForm = React.createClass({
  mixins: [LinkedStateMixin],
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  blankState: {
    name: '',
    image_url: '',
    poke_type: '',
    attack: '',
    defense: '',
    move_1: '',
    move_2: ''
  },
  getInitialState: function() {
    return this.blankState;
  },
  onSubmit: function() {
    this.state.moves = [this.state.move_1, this.state.move_2];
    delete this.state['move_1'];
    delete this.state['move_2'];
    ClientActions.createPokemon( { pokemon: this.state }, this.routeToNewPokemon);
    this.setState(this.blankState);
  },
  routeToNewPokemon: function(id) {
    this.context.router.push('pokemon/' + id);
  },
  render: function() {
    return(
      <form className='new-pokemon' onSubmit={ this.onSubmit }>
        <div>
            <label htmlFor='pokemon-name'>Name:</label>
            <input id='pokemon-name' valueLink={ this.linkState('name') }></input>
        </div>
        <div>
          <label htmlFor='pokemon-image-url'>Image URL:</label>
          <input id='pokemon-image-url' type='text' valueLink={ this.linkState('image_url') }></input>
        </div>
        <div>
          <label htmlFor='pokemon-type'>Type:</label>
          <select id='pokemon-type' className='type-selector' valueLink={ this.linkState('poke_type') }>
            <option key='0' value=''></option>
            { pokemonTypes.map(function(type, idx) {
            return( <option key={ idx } value={ type }>{ type }</option> )
          }) }
          </select>
        </div>
        <div>
          <label htmlFor='pokemon-attack'>Attack:</label>
          <input id='pokemon-attack' type='number' valueLink={ this.linkState('attack') }></input>
        </div>
        <div>
          <label htmlFor='pokemon-defense'>Defense:</label>
          <input id='pokemon-defense' type='number' valueLink={ this.linkState('defense') }></input>
        </div>
        <div>
          <label htmlFor='pokemon-move-1'>Move #1:</label>
          <input id='pokemon-move-1' type='text' valueLink={ this.linkState('move_1') }></input>
        </div>
        <div>
          <label htmlFor='pokemon-move-2'>Move #2:</label>
          <input id='pokemon-move-2' type='text' valueLink={ this.linkState('move_2') }></input>
        </div>
        <div><button>Create Pokemon</button></div>
      </form>
    )
  }
});

module.exports = PokemonForm;
