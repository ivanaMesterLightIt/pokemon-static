

const toggleFavourite = (id: number) => {

    let favourites: number[] = JSON.parse(localStorage.getItem('favourites') || '[]');

    if( favourites.includes(id) ){
        favourites = favourites.filter(pokeId => pokeId !== id );
    } else {
        favourites.push(id);
    }

    localStorage.setItem('favourites', JSON.stringify(favourites) );
}

const existsInFavourites = ( id: number ): boolean => {
    if( typeof window === 'undefined') return false;
    const favourites: number[] = JSON.parse(localStorage.getItem('favourites') || '[]');

    return favourites.includes(id);
}

export default { 
    toggleFavourite,
    existsInFavourites
};