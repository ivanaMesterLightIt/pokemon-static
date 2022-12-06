import * as React from 'react';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavourites } from '../../components/ui';
import { localFavourites } from '../../utils';

const FavouritesPage = () => {

    const [favouritePokemos, setFavouritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavouritePokemons(localFavourites.pokemons);
    }, []);

    return (
        <Layout title='Pokemons - Favoritos'>
            <NoFavourites />
        </Layout>
    );
}

export default FavouritesPage;