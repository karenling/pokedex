var ApiUtil = require('../util/ApiUtil');

var clientActions = {
  fetchAllPokemons: function() {
    ApiUtil.fetchAllPokemons();
  }
};

module.exports = clientActions;
