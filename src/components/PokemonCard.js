import React, { useState, useEffect } from 'react';

function PokemonCard({ url, name }) {
	// initialize state
	const [pokemon, setPokemon] = useState([]);

	// useEffect to fetch the data
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => res.json())
			.then((data) => {
				setPokemon(data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [name]);

	return (
		<div>
			Pokemon Card
		</div>
	);
}

export { PokemonCard };
