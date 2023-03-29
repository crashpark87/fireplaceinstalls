import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Parky's First Headless Website</title>
        <meta name="description" content="Welcome to Parky's first headless website built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="dark-blue">Parky's First Headless Website</h1>
        <p>
          Welcome to my first headless website! I'm using Next.js to build this amazing site, and it's incredibly cool. Next.js
          offers so many fantastic features, such as server-side rendering, static site generation, and API routes. I'm excited
          to see what I can create with it!
        </p>

        <pre className="ascii-art">
          {`
             O
            -|-
            / \\
          `}
        </pre>
        <p className="bronze">This is a happy man with glasses! 😎</p>
      </main>
    </div>
  );
}
