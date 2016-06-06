var ApiUtil = require('../util/ApiUtil');

var clientActions = {
  fetchAllPokemons: function() {
    ApiUtil.fetchAllPokemons();
  },
  fetchOnePokemon: function(id) {
    ApiUtil.fetchOnePokemon(id);
  },
  createPokemon: function(attrs, callback) {
    ApiUtil.createPokemon(attrs, callback);
  }
};

module.exports = clientActions;
