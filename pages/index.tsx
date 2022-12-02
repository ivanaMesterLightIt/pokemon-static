import { NextPage } from "next";
import { Layout } from "../components/layouts";
import { GetStaticProps } from "next";
import { pokeApi } from "../api";
import { PokemonListResponse } from "../interfaces";

const HomePage: NextPage = (props)  => {

  console.log({props});

  return (
    <Layout title="Listado de pokemons">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151', {
    headers: {
      'accept-encoding': '*'
    }
  });
  console.log(data);

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;