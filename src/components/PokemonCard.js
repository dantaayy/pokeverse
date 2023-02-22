import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function PokemonCard({ name }) {
	// initialize state
	const [pokemon, setPokemon] = useState(null);

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
		<Card>
			<Card.Title>{name}</Card.Title>
		</Card>
	);
}

export { PokemonCard };
