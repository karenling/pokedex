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
    case PokemonConstants.POKEMON_RECEIVED:
      PokemonStore.__emitChange();
      break;
  }
};

PokemonStore.findById = function(id) {
  return _pokemons[id]
};

var resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
};

module.exports = PokemonStore;
