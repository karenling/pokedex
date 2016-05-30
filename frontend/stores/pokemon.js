var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/PokemonConstants');
var PokemonStore = new Store(dispatcher);

var _pokemons = {};

PokemonStore.all = function() {
  return Object.keys(_pokemons).map(function(key) {
    return _pokemons[key];
  });
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      PokemonStore.__emitChange();
      break;
  }
};

var resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
};

module.exports = PokemonStore;
