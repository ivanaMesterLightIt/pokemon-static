import { Card, Grid, Row, Text } from '@nextui-org/react';
import Image from 'next/image';
import * as React from 'react';
import { SmallPokemon } from '../../interfaces'

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: React.FC<React.PropsWithChildren<Props>> = ({ pokemon }) => {
    return (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={pokemon.id}>
              <Card hoverable clickable>
                <Card.Body css={{ p:1, ds: "none" }}>
                  <Image src={ pokemon.img } width={ 140 } height={ 140 } alt={ pokemon.name } />
                </Card.Body>
                <Card.Footer>
                  <Row justify="space-between">
                    <Text transform="capitalize">{ pokemon.name }</Text>
                    <Text>#{ pokemon.id }</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
    );
}