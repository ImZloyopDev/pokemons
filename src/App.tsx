import { useState } from 'react'
import { useEffect } from 'react'
import Pokemons from './components/pokemons'
import { PokemonService } from './services/PokemonService'
import { IPokemon, IPokemonsResponce, IPokemonsResponceDetails } from './types/PokemonType'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [pokemonsDetails, setPokemonsDetails] = useState<IPokemonsResponceDetails[]>([])

  console.log()

  useEffect(() => {
    const fetchData = async () => {
      const pokemons: IPokemonsResponce = await PokemonService.getPokemons()
      setPokemons(pokemons.results)
    }

    fetchData()
  }, [])
  
  useEffect(() => {
    const fetchDetailsPokemons = async () => {
      const pokemonResponseDetail = await Promise.all(pokemons.map(async pokemon => {
        return (await fetch(pokemon.url)).json()
      }))
      setPokemonsDetails(pokemonResponseDetail)
    }
    if (pokemons.length > 0) {
    fetchDetailsPokemons();
    }
  }, [pokemons])

  console.log(pokemonsDetails)

  return (
  <main className="flex flex-row">
    <div className="basis-1/2">
      <h2 className="font-bold text-gray-950 text-lg">Pokemons</h2>
      <ul>
      <Pokemons pokemons={pokemons}/>
      </ul>
    </div>
    <div className="basis-1/2">
      <h2 className="font-bold text-gray-950 text-lg">Pokemon details</h2>
      </div>
  </main>
  )
}

export default App
