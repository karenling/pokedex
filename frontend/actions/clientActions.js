var ApiUtil = require('../util/ApiUtil');

var clientActions = {
  fetchAllPokemons: function() {
    ApiUtil.fetchAllPokemons();
  },
  fetchOnePokemon: function(id) {
    ApiUtil.fetchOnePokemon(id);
  }
};

module.exports = clientActions;
