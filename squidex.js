const { SquidexClientManager } = require('squidex-client-manager');

const clientManager = new SquidexClientManager({
  appName: 'fireplace-website',
  clientId: 'fireplace-installations:fireplaceinstalls',
  clientSecret: 'wbchbszveha2m7nezvv9jn1mtrjsoiiabm0zu0zaxwqx',
  apiUrl: 'https://cloud.squidex.io',
});

const client = clientManager.getClient();

module.exports = client;
