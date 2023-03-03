import React, { useState, useEffect, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FavoritesContext } from '../FavoritesProvider';

function PokemonCard({ url, name }) {
	// initialize state
	const [pokemon, setPokemon] = useState(null);
	// Destructure from FavoritesContext
	const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

	// useEffect to fetch the data
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setPokemon(data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [name]);

	return (
		<Card style={{ width: '20rem' }} className='mx-auto'>
			<Card.Img
				width='286'
				height='286'
				bg='dark'
				variant='top'
				src={pokemon?.sprites.front_default}
			/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text as='div'>
					Abilities:
					<ul>
						{pokemon?.abilities.map((ability) => (
							<li key={ability.ability.name}>
								<span key={ability.ability.name}>{ability.ability.name}</span>
							</li>
						))}
					</ul>
				</Card.Text>
				{favorites.includes(name) ? (
					<Button variant='danger' onClick={() => removeFavorite(name)}>
						Remove from favorites
					</Button>
				) : (
					<Button variant='primary' onClick={() => addFavorite(name)}>
						Add to favorites
					</Button>
				)}
			</Card.Body>
		</Card>
	);
}

export { PokemonCard };
