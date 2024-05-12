import { FC } from 'react';
import { PokemonService } from '../services/PokemonService'
import { IPokemon, IPokemonsResponce } from '../types/PokemonType'
import PokemonItem from './pokenmonitem';

interface IPokemons {
    pokemons: IPokemon[]
}

const Pokemons: FC<IPokemons> = ({ pokemons }) => {
    return <ul className='grid grid-flow-cols-[1fr_1fr] gap-4'>
        {pokemons.map((pokemon) => <PokemonItem key={pokemon.url} pokemon={pokemon} />)}
    </ul>
}

export default Pokemons