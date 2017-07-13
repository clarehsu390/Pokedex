import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokeList = this.props.pokemon.map((poke) => (
      <li key={poke.id}>{poke.name}<img src={poke.image_url}/></li>
    ));
    return (
      <ul>
        {pokeList}
      </ul>
    );
  }
}

export default PokemonIndex;
