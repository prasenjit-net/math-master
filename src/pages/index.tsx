import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MathStage } from "../components/MathStage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Math Master for Kids</title>
        <meta
          name="description"
          content="A mathematical problem generator for kids"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Math Master</h1>

        <p>Get your math problem here</p>

        <MathStage />
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Home;
