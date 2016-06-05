var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var HashHistory = require('react-router').hashHistory;
var PokemonsIndex = require('./components/pokemons/pokemonsIndex');
var PokemonDetail = require('./components/pokemons/detail');
var ToyDetail = require('./components/toys/detail');
var App = require('./components/app');

var routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={ PokemonDetail }>
      <Route path="toys/:toyId" component={ ToyDetail }></Route>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Router history={ HashHistory }>{ routes }</Router>, document.getElementById('root'));
});
