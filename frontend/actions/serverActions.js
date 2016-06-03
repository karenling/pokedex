var dispatcher = require('../dispatcher/dispatcher.js');
var PokemonConstants = require('../constants/PokemonConstants');
var pokemon = require('../stores/pokemon'); //TODO need to require this somewhere else

var serverActions = {
  receiveAllPokemons: function(pokemons) {
    dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },
  receiveOnePokemon: function(pokemon) {
    dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }
};

module.exports = serverActions;
