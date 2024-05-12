import { FC } from 'react';
import { IPokemon } from '../types/PokemonType';

interface IPokemonItem {
    pokemon: IPokemon
}

const PokemonItem: FC<IPokemonItem> = ({pokemon}) => {
    return <li className=''>
        <h2 className=''>{pokemon.name}</h2>
        <a href={pokemon.url} className=''>{pokemon.url}</a>
    </li>
}

export default PokemonItem