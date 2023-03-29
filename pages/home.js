import React from 'react';
import { client } from '../squidex';
import { useRouter } from 'next/router';

import { getPage } from '../squidex-api';

export async function getServerSideProps(context) {
  const page = await getPage('slug');
  return { props: { page } };
}

export default function HomePage({ page }) {
  return (
    <div>
      <h1>{page.data.title.iv}</h1>
      <p>{page.data.description.iv}</p>
    </div>
  );
}
