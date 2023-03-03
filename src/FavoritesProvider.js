import React, { createContext, useState } from 'react'

// Context initialization
export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (favorite) => {
        // copy the current fav array w/o modifying then add new fav to it
        setFavorites([...favorites, favorite]);
    }

    const removeFavorite = (name) => {
        // Copy current fav list and filter out the one that is unfaved
        setFavorites(favorites.filter((favorite) => name !== favorite))
    }


    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider