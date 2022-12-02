import { NextPage } from "next";
import { Layout } from "../components/layouts";
import { GetStaticProps } from "next";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons })  => {

  return (
    <Layout title="Listado de pokemons">
      <ul>
        {
          pokemons.map(({id, name}) => (
            <li key={id}>
              #{id} - {name}
            </li>
          ))
        }
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

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;