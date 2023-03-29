import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Parkys first headless website</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header>
        <h1>Parkys first headless website</h1>
      </header>

      <style jsx>{`
        .container {
          font-family: 'Montserrat', sans-serif;
          background-color: #1c3144;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #cd7f32;
          padding: 0 1rem;
        }

        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        h1 {
          font-weight: 700;
          font-size: 2.5rem;
          text-align: center;
          margin: 0;
          padding: 1rem;
          background-color: #cd7f32;
          border-radius: 5px;
          color: #1c3144;
        }
      `}</style>
    </div>
  );
}