import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import FavoritesProvider from './FavoritesProvider';
import Favorites from './routes/Favorites';
import Home from './routes/Home';
import PokemonDetails from './routes/PokemonDetails'

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
		<BrowserRouter>
			<FavoritesProvider>
				<div data-testid="app">
					<Navigation />

					<Routes>
						<Route path="/" element={<Home pokemonList={pokemonList} />} />
						<Route path="/:name" element={PokemonDetails} />
						<Route path="/favorites" element={<Favorites />} />
					</Routes>
				</div>
			</FavoritesProvider>
		</BrowserRouter>
	);
}

export { App };
