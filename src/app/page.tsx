import Head from "next/head";

import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio" />
      </Head>

      <Hero />
    </div>
  );
}
