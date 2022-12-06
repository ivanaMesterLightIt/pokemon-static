import * as React from 'react';
import { Grid } from '@nextui-org/react';
import { FavouritePokemonCard } from './';

interface Props {
    pokemons: number[]
}

export const FavouritePokemons: React.FC<Props>  = ({ pokemons }) => {
    return (
        <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
            {
                pokemons.map( id => (
                    <FavouritePokemonCard pokemonId={id} key={id}/> 
                ))
            }
        </Grid.Container>
    );
}