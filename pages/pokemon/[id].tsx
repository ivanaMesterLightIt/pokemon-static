import { useRouter } from 'next/router';
import * as React from 'react';
import { Layout } from '../../components/layouts';

interface Props {
    pokemon: any;
}

const PokemonPage = () => {
    
    const router = useRouter();
    console.log(router.query);

    return (
        <Layout title='Algun pokemon'>
            <h1>Hola mundo</h1>
        </Layout>
    );
}

export default PokemonPage;