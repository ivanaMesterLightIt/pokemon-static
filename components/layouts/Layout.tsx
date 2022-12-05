import Head from 'next/head';
import * as React from 'react';
import { Navbar } from '../ui';

type Props = {
    title?: string
};
export const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App'}</title>
                <meta name="author" content="Ivana Mester"/>
                <meta name="description" content={`Información sobre el pokemon XXX ${title}`}/>
                <meta name="keywords" content={`${ title }, pokemon, pokedex`}/>
            </Head>
            <Navbar/>

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        </>
    );
}