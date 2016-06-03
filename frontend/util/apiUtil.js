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
  },
  fetchOnePokemon: function(id) {
    $.ajax({
      type: 'GET',
      data: 'JSON',
      url: 'api/pokemon/' + id,
      success: function(pokemon) {
        ServerActions.receiveOnePokemon(pokemon);
      }
    });
  }
};

module.exports = ApiUtil;
