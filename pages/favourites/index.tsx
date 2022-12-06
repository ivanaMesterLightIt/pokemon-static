import { Card, Grid } from '@nextui-org/react';
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
            {
                favouritePokemos.length === 0 
                    ? (<NoFavourites />)
                    : (
                        <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
                            {
                                favouritePokemos.map( id => (
                                    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
                                        <Card hoverable clickable css={{ padding: 10 }}>
                                            <Card.Image 
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                                width={'100%'}
                                                height={ 140 }
                                            />
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid.Container>
                    )
            }
        </Layout>
    );
}

export default FavouritesPage;