import { NextPage } from "next";
import { Layout } from "../components/layouts";
import { GetStaticProps } from "next";

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

  console.log('hola mundo');

  return {
    props: {
      name: "Ivana"
    }
  }
}

export default HomePage;