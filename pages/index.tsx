import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Parkys First Headless Website</title>
        <meta name="description" content="Welcome to Parkys first headless website built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="dark-blue">Parkys First Headless Website</h1>
        <p>
          Welcome to my first headless website! Im using Next.js to build this amazing site, and its incredibly cool. Next.js
          offers so many fantastic features, such as server-side rendering, static site generation, and API routes. Im excited
          to see what I can create with it.
        </p>

      </main>
    </div>
  );
}