import { Card, Grid, Row, Text } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { SmallPokemon } from '../../interfaces'

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
    
    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${ pokemon.name }`);
    }
    
    return (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={pokemon.id}>
            <Card 
              hoverable 
              clickable
              onClick={onClick}
            >
              <Card.Body css={{ p:1, ds: "none" }}>
                <Card.Image src={ pokemon.img } width={ 140 } height={ 140 } alt={ pokemon.name } />
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

