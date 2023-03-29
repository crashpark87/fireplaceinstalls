import axios from 'axios';

const squidexClient = axios.create({
  baseURL: 'https://cloud.squidex.io/app/fireplace-installations',
  headers: {
    'Authorization': 'Bearer wbchbszveha2m7nezvv9jn1mtrjsoiiabm0zu0zaxwqx',
    'Content-Type': 'application/json',
  },
});

export async function getPage(slug) {
  const response = await squidexClient.get(`/homepage?filter=data/slug/iv eq '${slug}'`);
  return response.data.items[0];
}
