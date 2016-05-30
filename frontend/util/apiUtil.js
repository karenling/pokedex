var ServerActions = require('../actions/serverActions');

var ApiUtil = {
  fetchAllPokemons: function() {
    $.ajax({
      type: 'GET',
      data: 'JSON',
      url: 'api/pokemon',
      success: function(pokemons) {
        ServerActions.receiveAllPokemons(pokemons);
      }
    });
  }
};

module.exports = ApiUtil;
