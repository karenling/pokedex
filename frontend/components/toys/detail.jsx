var React = require('react');
var PokemonStore = require('../../stores/pokemon');

var ToyDetail = React.createClass({
  getStateFromStore: function() {
    var toy;
    if (PokemonStore.findById(this.props.params.pokemonId) && PokemonStore.findById(this.props.params.pokemonId).toys) {
      PokemonStore.findById(this.props.params.pokemonId).toys.forEach(function(payload) {
        if (payload.id == this.props.params.toyId) {
          toy = payload
        }
      }.bind(this))
    }
    return { toy: toy }
  },
  getInitialState: function() {
    return this.getStateFromStore()
  },
  _onChange: function() {
    this.setState(this.getStateFromStore());
  },
  componentDidMount: function() {
    this.listener = PokemonStore.addListener(this._onChange)
  },
  componentWillUnmount: function() {
    this.listener.remove()
  },
  // do i need componentWillReceiveProps here even though pokemon detail already has it?
  render: function() {
    if (this.state.toy === undefined) {
      return( <div>ejwlfajlwef</div>)
    }
    return(
      <div className='toy-detail-pane'>
        <div className='detail'>
          <div><img src={ this.state.toy.image_url } /></div>
          <p>Name: { this.state.toy.name }</p>
          <p>Happiness: { this.state.toy.happiness }</p>
          <p>Price: { this.state.toy.price }</p>
        </div>
      </div>
    )
  }
})

module.exports = ToyDetail;
