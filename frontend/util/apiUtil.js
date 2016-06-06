var ServerActions = require('../actions/serverActions');

var ApiUtil = {
  fetchAllPokemons: function() {
    $.ajax({
      type: 'GET',
      dataType: 'JSON',
      url: 'api/pokemon',
      success: function(pokemons) {
        ServerActions.receiveAllPokemons(pokemons);
      }
    });
  },
  fetchOnePokemon: function(id) {
    $.ajax({
      type: 'GET',
      dataType: 'JSON',
      url: 'api/pokemon/' + id,
      success: function(pokemon) {
        ServerActions.receiveOnePokemon(pokemon);
      }
    });
  },
  createPokemon: function(attrs, callback) {
    $.ajax({
      type: 'POST',
      dataType: 'JSON',
      url: 'api/pokemon',
      data: attrs,
      success: function(pokemon) {
        ServerActions.receiveOnePokemon(pokemon);
        callback(pokemon.id);
      },
      error: function(response, type, status) {
        console.log(response.responseText);
      }
    });
  }
};

module.exports = ApiUtil;
