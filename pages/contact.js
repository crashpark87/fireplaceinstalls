import React from 'react';
import { client } from '../squidex';
import { useRouter } from 'next/router';

const contact = ({ data }) => {
    // Your page content and layout goes here
  };
  
  export default contact;

  export async function getStaticProps() {
    const { data } = await client.query('contact');
  
    return {
      props: {
        data,
      },
      revalidate: 60,
    };
  }
  