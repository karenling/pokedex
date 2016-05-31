var React = require('react');
var ReactDOM = require('react-dom');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<PokemonsIndex />, document.getElementById('root'));
});
