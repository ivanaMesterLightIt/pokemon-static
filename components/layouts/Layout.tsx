import Head from 'next/head';
import * as React from 'react';

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

                {/* Navbar */}

                <main>
                    { children }
                </main>
            </Head>
        </>
    );
}