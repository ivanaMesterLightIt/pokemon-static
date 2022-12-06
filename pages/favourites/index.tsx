import * as React from 'react';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { FavouritePokemons } from '../../components/pokemon';
import { NoFavourites } from '../../components/ui';
import { localFavourites } from '../../utils';

const FavouritesPage = () => {

    const [favouritePokemos, setFavouritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavouritePokemons(localFavourites.pokemons);
    }, []);

    return (
        <Layout title='Pokemons - Favoritos'>
            {
                favouritePokemos.length === 0 
                    ? (<NoFavourites />)
                    : (<FavouritePokemons pokemons={favouritePokemos}/>)
            }
        </Layout>
    );
}

export default FavouritesPage;