import React from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import { useState, useEffect } from 'react';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
	// initialize state
	const [pokemonList, setPokemonList] = useState([]);

	// Use effect to fetch the pokemon cards and avoid side effects
	useEffect(() => {
		fetch(pokeApi)
			.then((res) => res.json())
			.then((data) => {
				setPokemonList(data.results);
			})
			.catch((error) => {
				console.error(error)
			})
	}, []);

	return (
		<div data-testid="app">
			<Navigation />

			<h1>Pokemon should appear here</h1>
			{
				// Map over pokemonList that is set by the useEffect
				pokemonList.map((pokemon) =>
					<PokemonCard name={pokemon.name} />
				)
			}

		</div>
	);
}

export { App };
